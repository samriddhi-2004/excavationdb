import { U as ProtocolError, V as TimeoutWaitingForResponseErrorCode, W as utf8ToBytes, Y as ExternalError, Z as MissingRootKeyErrorCode, _ as Certificate, $ as lookupResultToBuffer, a0 as RequestStatusResponseStatus, a1 as UnknownError, a2 as RequestStatusDoneNoReplyErrorCode, a3 as RejectError, a4 as CertifiedRejectErrorCode, a5 as UNREACHABLE_ERROR, a6 as InputError, a7 as InvalidReadStateRequestErrorCode, a8 as ReadRequestType, a9 as Principal, aa as IDL, ab as MissingCanisterIdErrorCode, ac as HttpAgent, ad as encode, ae as QueryResponseStatus, af as UncertifiedRejectErrorCode, ag as isV3ResponseBody, ah as isV2ResponseBody, ai as UncertifiedRejectUpdateErrorCode, aj as UnexpectedErrorCode, ak as decode, al as Record, am as Vec, an as Variant, ao as Service, ap as Func, aq as Opt, ar as Text, as as Float64, at as Null } from "./index-DUkTmDMn.js";
const FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
  let first = true;
  return async () => {
    if (first) {
      first = false;
      return true;
    }
    return false;
  };
}
function conditionalDelay(condition, timeInMsec) {
  return async (canisterId, requestId, status) => {
    if (await condition(canisterId, requestId, status)) {
      return new Promise((resolve) => setTimeout(resolve, timeInMsec));
    }
  };
}
function timeout(timeInMsec) {
  const end = Date.now() + timeInMsec;
  return async (_canisterId, requestId, status) => {
    if (Date.now() > end) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Request timed out after ${timeInMsec} msec`, requestId, status));
    }
  };
}
function backoff(startingThrottleInMsec, backoffFactor) {
  let currentThrottling = startingThrottleInMsec;
  return () => new Promise((resolve) => setTimeout(() => {
    currentThrottling *= backoffFactor;
    resolve();
  }, currentThrottling));
}
function chain(...strategies) {
  return async (canisterId, requestId, status) => {
    for (const a of strategies) {
      await a(canisterId, requestId, status);
    }
  };
}
const DEFAULT_POLLING_OPTIONS = {
  preSignReadStateRequest: false
};
function hasProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}
function isObjectWithProperty(value, property) {
  return value !== null && typeof value === "object" && hasProperty(value, property);
}
function hasFunction(value, property) {
  return hasProperty(value, property) && typeof value[property] === "function";
}
function isSignedReadStateRequestWithExpiry(value) {
  return isObjectWithProperty(value, "body") && isObjectWithProperty(value.body, "content") && value.body.content.request_type === ReadRequestType.ReadState && isObjectWithProperty(value.body.content, "ingress_expiry") && typeof value.body.content.ingress_expiry === "object" && value.body.content.ingress_expiry !== null && hasFunction(value.body.content.ingress_expiry, "toHash");
}
async function pollForResponse(agent, canisterId, requestId, options = {}) {
  const path = [utf8ToBytes("request_status"), requestId];
  let state;
  let currentRequest;
  const preSignReadStateRequest = options.preSignReadStateRequest ?? false;
  if (preSignReadStateRequest) {
    currentRequest = await constructRequest({
      paths: [path],
      agent,
      pollingOptions: options
    });
    state = await agent.readState(canisterId, { paths: [path] }, void 0, currentRequest);
  } else {
    state = await agent.readState(canisterId, { paths: [path] });
  }
  if (agent.rootKey == null) {
    throw ExternalError.fromCode(new MissingRootKeyErrorCode());
  }
  const cert = await Certificate.create({
    certificate: state.certificate,
    rootKey: agent.rootKey,
    canisterId,
    blsVerify: options.blsVerify,
    agent
  });
  const maybeBuf = lookupResultToBuffer(cert.lookup_path([...path, utf8ToBytes("status")]));
  let status;
  if (typeof maybeBuf === "undefined") {
    status = RequestStatusResponseStatus.Unknown;
  } else {
    status = new TextDecoder().decode(maybeBuf);
  }
  switch (status) {
    case RequestStatusResponseStatus.Replied: {
      return {
        reply: lookupResultToBuffer(cert.lookup_path([...path, "reply"])),
        certificate: cert
      };
    }
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing: {
      const strategy = options.strategy ?? defaultStrategy();
      await strategy(canisterId, requestId, status);
      return pollForResponse(agent, canisterId, requestId, {
        ...options,
        // Pass over either the strategy already provided or the new one created above
        strategy,
        request: currentRequest
      });
    }
    case RequestStatusResponseStatus.Rejected: {
      const rejectCode = new Uint8Array(lookupResultToBuffer(cert.lookup_path([...path, "reject_code"])))[0];
      const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(cert.lookup_path([...path, "reject_message"])));
      const errorCodeBuf = lookupResultToBuffer(cert.lookup_path([...path, "error_code"]));
      const errorCode = errorCodeBuf ? new TextDecoder().decode(errorCodeBuf) : void 0;
      throw RejectError.fromCode(new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, errorCode));
    }
    case RequestStatusResponseStatus.Done:
      throw UnknownError.fromCode(new RequestStatusDoneNoReplyErrorCode(requestId));
  }
  throw UNREACHABLE_ERROR;
}
async function constructRequest(options) {
  var _a;
  const { paths, agent, pollingOptions } = options;
  if (pollingOptions.request && isSignedReadStateRequestWithExpiry(pollingOptions.request)) {
    return pollingOptions.request;
  }
  const request = await ((_a = agent.createReadStateRequest) == null ? void 0 : _a.call(agent, {
    paths
  }, void 0));
  if (!isSignedReadStateRequestWithExpiry(request)) {
    throw InputError.fromCode(new InvalidReadStateRequestErrorCode(request));
  }
  return request;
}
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(actor) {
    return actor[metadataSymbol].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(actor) {
    return actor[metadataSymbol].service;
  }
  static canisterIdOf(actor) {
    return Principal.from(actor[metadataSymbol].config.canisterId);
  }
  static createActorClass(interfaceFactory, options) {
    const service = interfaceFactory({ IDL });
    class CanisterActor extends Actor {
      constructor(config) {
        if (!config.canisterId) {
          throw InputError.fromCode(new MissingCanisterIdErrorCode(config.canisterId));
        }
        const canisterId = typeof config.canisterId === "string" ? Principal.fromText(config.canisterId) : config.canisterId;
        super({
          config: {
            ...DEFAULT_ACTOR_CONFIG,
            ...config,
            canisterId
          },
          service
        });
        for (const [methodName, func] of service._fields) {
          if (options == null ? void 0 : options.httpDetails) {
            func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
          }
          if (options == null ? void 0 : options.certificate) {
            func.annotations.push(ACTOR_METHOD_WITH_CERTIFICATE);
          }
          this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
        }
      }
    }
    return CanisterActor;
  }
  /**
   * Creates an actor with the given interface factory and configuration.
   *
   * The [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package can be used to generate the interface factory for your canister.
   * @param interfaceFactory - the interface factory for the actor, typically generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package
   * @param configuration - the configuration for the actor
   * @returns an actor with the given interface factory and configuration
   * @example
   * Using the interface factory generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { Actor, HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { idlFactory } from './api/declarations/hello-world.did';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = Actor.createActor(idlFactory, {
   *   agent,
   *   canisterId,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   * @example
   * Using the `createActor` wrapper function generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { createActor } from './api/hello-world';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = createActor(canisterId, {
   *   agent,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   */
  static createActor(interfaceFactory, configuration) {
    if (!configuration.canisterId) {
      throw InputError.fromCode(new MissingCanisterIdErrorCode(configuration.canisterId));
    }
    return new (this.createActorClass(interfaceFactory))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(interfaceFactory, configuration) {
    return new (this.createActorClass(interfaceFactory, { httpDetails: true }))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(interfaceFactory, configuration, actorClassOptions = {
    httpDetails: true,
    certificate: true
  }) {
    return new (this.createActorClass(interfaceFactory, actorClassOptions))(configuration);
  }
  constructor(metadata) {
    this[metadataSymbol] = Object.freeze(metadata);
  }
}
function decodeReturnValue(types, msg) {
  const returnValues = decode(types, msg);
  switch (returnValues.length) {
    case 0:
      return void 0;
    case 1:
      return returnValues[0];
    default:
      return returnValues;
  }
}
const DEFAULT_ACTOR_CONFIG = {
  pollingOptions: DEFAULT_POLLING_OPTIONS
};
const ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
const ACTOR_METHOD_WITH_CERTIFICATE = "certificate";
function _createActorMethod(actor, methodName, func, blsVerify) {
  let caller;
  if (func.annotations.includes("query") || func.annotations.includes("composite_query")) {
    caller = async (options, ...args) => {
      var _a, _b;
      options = {
        ...options,
        ...(_b = (_a = actor[metadataSymbol].config).queryTransform) == null ? void 0 : _b.call(_a, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || new HttpAgent();
      const cid = Principal.from(options.canisterId || actor[metadataSymbol].config.canisterId);
      const arg = encode(func.argTypes, args);
      const result = await agent.query(cid, {
        methodName,
        arg,
        effectiveCanisterId: options.effectiveCanisterId
      });
      const httpDetails = {
        ...result.httpDetails,
        requestDetails: result.requestDetails
      };
      switch (result.status) {
        case QueryResponseStatus.Rejected: {
          const uncertifiedRejectErrorCode = new UncertifiedRejectErrorCode(result.requestId, result.reject_code, result.reject_message, result.error_code, result.signatures);
          uncertifiedRejectErrorCode.callContext = {
            canisterId: cid,
            methodName,
            httpDetails
          };
          throw RejectError.fromCode(uncertifiedRejectErrorCode);
        }
        case QueryResponseStatus.Replied:
          return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
            httpDetails,
            result: decodeReturnValue(func.retTypes, result.reply.arg)
          } : decodeReturnValue(func.retTypes, result.reply.arg);
      }
    };
  } else {
    caller = async (options, ...args) => {
      var _a, _b;
      options = {
        ...options,
        ...(_b = (_a = actor[metadataSymbol].config).callTransform) == null ? void 0 : _b.call(_a, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || HttpAgent.createSync();
      const { canisterId, effectiveCanisterId, pollingOptions } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const cid = Principal.from(canisterId);
      const ecid = effectiveCanisterId !== void 0 ? Principal.from(effectiveCanisterId) : cid;
      const arg = encode(func.argTypes, args);
      const { requestId, response, requestDetails } = await agent.call(cid, {
        methodName,
        arg,
        effectiveCanisterId: ecid,
        nonce: options.nonce
      });
      let reply;
      let certificate;
      if (isV3ResponseBody(response.body)) {
        if (agent.rootKey == null) {
          throw ExternalError.fromCode(new MissingRootKeyErrorCode());
        }
        const cert = response.body.certificate;
        certificate = await Certificate.create({
          certificate: cert,
          rootKey: agent.rootKey,
          canisterId: ecid,
          blsVerify,
          agent
        });
        const path = [utf8ToBytes("request_status"), requestId];
        const status = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "status"])));
        switch (status) {
          case "replied":
            reply = lookupResultToBuffer(certificate.lookup_path([...path, "reply"]));
            break;
          case "rejected": {
            const rejectCode = new Uint8Array(lookupResultToBuffer(certificate.lookup_path([...path, "reject_code"])))[0];
            const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "reject_message"])));
            const error_code_buf = lookupResultToBuffer(certificate.lookup_path([...path, "error_code"]));
            const error_code = error_code_buf ? new TextDecoder().decode(error_code_buf) : void 0;
            const certifiedRejectErrorCode = new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, error_code);
            certifiedRejectErrorCode.callContext = {
              canisterId: cid,
              methodName,
              httpDetails: response
            };
            throw RejectError.fromCode(certifiedRejectErrorCode);
          }
        }
      } else if (isV2ResponseBody(response.body)) {
        const { reject_code, reject_message, error_code } = response.body;
        const errorCode = new UncertifiedRejectUpdateErrorCode(requestId, reject_code, reject_message, error_code);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails: response
        };
        throw RejectError.fromCode(errorCode);
      }
      if (response.status === 202) {
        const pollOptions = {
          ...pollingOptions,
          blsVerify
        };
        const response2 = await pollForResponse(agent, ecid, requestId, pollOptions);
        certificate = response2.certificate;
        reply = response2.reply;
      }
      const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
      const shouldIncludeCertificate = func.annotations.includes(ACTOR_METHOD_WITH_CERTIFICATE);
      const httpDetails = { ...response, requestDetails };
      if (reply !== void 0) {
        if (shouldIncludeHttpDetails && shouldIncludeCertificate) {
          return {
            httpDetails,
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeCertificate) {
          return {
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeHttpDetails) {
          return {
            httpDetails,
            result: decodeReturnValue(func.retTypes, reply)
          };
        }
        return decodeReturnValue(func.retTypes, reply);
      } else {
        const errorCode = new UnexpectedErrorCode(`Call was returned undefined. We cannot determine if the call was successful or not. Return types: [${func.retTypes.map((t) => t.display()).join(",")}].`);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails
        };
        throw UnknownError.fromCode(errorCode);
      }
    };
  }
  const handler = (...args) => caller({}, ...args);
  handler.withOptions = (options) => (...args) => caller(options, ...args);
  return handler;
}
const ComparisonMetric = Record({
  "installationTime": Text,
  "waterControl": Text,
  "maxHeight": Float64,
  "deflection": Text,
  "systemId": Text,
  "mobilizationTime": Text,
  "noisyVibration": Text,
  "costRange": Text
});
const ResearchPaper = Record({
  "id": Text,
  "categories": Vec(Text),
  "method": Text,
  "title": Text,
  "doiLink": Text,
  "keyParameters": Text,
  "abstract": Text
});
const SystemDetail = Record({
  "content": Text,
  "tabName": Text,
  "systemId": Text
});
const WallType$1 = Variant({
  "TangentPile": Null,
  "SheetPile": Null,
  "SecantPile": Null,
  "DiaphragmWall": Null,
  "Micropile": Null,
  "SoldierPile": Null
});
const ExcavationSystem = Record({
  "id": Text,
  "name": Text,
  "description": Text,
  "wallType": WallType$1
});
Service({
  "getAllMetrics": Func([], [Vec(ComparisonMetric)], ["query"]),
  "getPapers": Func([], [Vec(ResearchPaper)], ["query"]),
  "getPapersByCategory": Func(
    [Text],
    [Vec(ResearchPaper)],
    ["query"]
  ),
  "getSystemDetail": Func(
    [Text, Text],
    [Opt(SystemDetail)],
    ["query"]
  ),
  "getSystems": Func([], [Vec(ExcavationSystem)], ["query"])
});
const idlFactory = ({ IDL: IDL2 }) => {
  const ComparisonMetric2 = IDL2.Record({
    "installationTime": IDL2.Text,
    "waterControl": IDL2.Text,
    "maxHeight": IDL2.Float64,
    "deflection": IDL2.Text,
    "systemId": IDL2.Text,
    "mobilizationTime": IDL2.Text,
    "noisyVibration": IDL2.Text,
    "costRange": IDL2.Text
  });
  const ResearchPaper2 = IDL2.Record({
    "id": IDL2.Text,
    "categories": IDL2.Vec(IDL2.Text),
    "method": IDL2.Text,
    "title": IDL2.Text,
    "doiLink": IDL2.Text,
    "keyParameters": IDL2.Text,
    "abstract": IDL2.Text
  });
  const SystemDetail2 = IDL2.Record({
    "content": IDL2.Text,
    "tabName": IDL2.Text,
    "systemId": IDL2.Text
  });
  const WallType2 = IDL2.Variant({
    "TangentPile": IDL2.Null,
    "SheetPile": IDL2.Null,
    "SecantPile": IDL2.Null,
    "DiaphragmWall": IDL2.Null,
    "Micropile": IDL2.Null,
    "SoldierPile": IDL2.Null
  });
  const ExcavationSystem2 = IDL2.Record({
    "id": IDL2.Text,
    "name": IDL2.Text,
    "description": IDL2.Text,
    "wallType": WallType2
  });
  return IDL2.Service({
    "getAllMetrics": IDL2.Func([], [IDL2.Vec(ComparisonMetric2)], ["query"]),
    "getPapers": IDL2.Func([], [IDL2.Vec(ResearchPaper2)], ["query"]),
    "getPapersByCategory": IDL2.Func(
      [IDL2.Text],
      [IDL2.Vec(ResearchPaper2)],
      ["query"]
    ),
    "getSystemDetail": IDL2.Func(
      [IDL2.Text, IDL2.Text],
      [IDL2.Opt(SystemDetail2)],
      ["query"]
    ),
    "getSystems": IDL2.Func([], [IDL2.Vec(ExcavationSystem2)], ["query"])
  });
};
var WallType = /* @__PURE__ */ ((WallType2) => {
  WallType2["TangentPile"] = "TangentPile";
  WallType2["SheetPile"] = "SheetPile";
  WallType2["SecantPile"] = "SecantPile";
  WallType2["DiaphragmWall"] = "DiaphragmWall";
  WallType2["Micropile"] = "Micropile";
  WallType2["SoldierPile"] = "SoldierPile";
  return WallType2;
})(WallType || {});
class Backend {
  constructor(actor, _uploadFile, _downloadFile, processError) {
    this.actor = actor;
    this._uploadFile = _uploadFile;
    this._downloadFile = _downloadFile;
    this.processError = processError;
  }
  async getAllMetrics() {
    if (this.processError) {
      try {
        const result = await this.actor.getAllMetrics();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAllMetrics();
      return result;
    }
  }
  async getPapers() {
    if (this.processError) {
      try {
        const result = await this.actor.getPapers();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getPapers();
      return result;
    }
  }
  async getPapersByCategory(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getPapersByCategory(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getPapersByCategory(arg0);
      return result;
    }
  }
  async getSystemDetail(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.getSystemDetail(arg0, arg1);
        return from_candid_opt_n1(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getSystemDetail(arg0, arg1);
      return from_candid_opt_n1(this._uploadFile, this._downloadFile, result);
    }
  }
  async getSystems() {
    if (this.processError) {
      try {
        const result = await this.actor.getSystems();
        return from_candid_vec_n2(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getSystems();
      return from_candid_vec_n2(this._uploadFile, this._downloadFile, result);
    }
  }
}
function from_candid_ExcavationSystem_n3(_uploadFile, _downloadFile, value) {
  return from_candid_record_n4(_uploadFile, _downloadFile, value);
}
function from_candid_WallType_n5(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n6(_uploadFile, _downloadFile, value);
}
function from_candid_opt_n1(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_record_n4(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    name: value.name,
    description: value.description,
    wallType: from_candid_WallType_n5(_uploadFile, _downloadFile, value.wallType)
  };
}
function from_candid_variant_n6(_uploadFile, _downloadFile, value) {
  return "TangentPile" in value ? "TangentPile" : "SheetPile" in value ? "SheetPile" : "SecantPile" in value ? "SecantPile" : "DiaphragmWall" in value ? "DiaphragmWall" : "Micropile" in value ? "Micropile" : "SoldierPile" in value ? "SoldierPile" : value;
}
function from_candid_vec_n2(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_ExcavationSystem_n3(_uploadFile, _downloadFile, x));
}
function createActor(canisterId, _uploadFile, _downloadFile, options = {}) {
  const agent = options.agent || HttpAgent.createSync({
    ...options.agentOptions
  });
  if (options.agent && options.agentOptions) {
    console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
  }
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions
  });
  return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
const METRIC_ROWS = [
  {
    id: "system-type",
    label: "System Type",
    description: "Structural continuity of the wall",
    values: {
      "soldier-pile": "Discontinuous",
      "secant-pile": "Continuous",
      "sheet-pile": "Continuous",
      "tangent-pile": "Discontinuous",
      micropile: "Discontinuous",
      "diaphragm-wall": "Continuous"
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "best",
      "sheet-pile": "good",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "stiffness",
    label: "Stiffness",
    description: "Resistance to deformation under lateral load",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "High",
      "sheet-pile": "Medium",
      "tangent-pile": "Medium",
      micropile: "Low–Medium",
      "diaphragm-wall": "Very High"
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "continuity",
    label: "Continuity / Waterproof",
    description: "Whether wall provides watertight barrier",
    values: {
      "soldier-pile": "Non-waterproof",
      "secant-pile": "Waterproof",
      "sheet-pile": "Waterproof",
      "tangent-pile": "Non-waterproof",
      micropile: "Non-waterproof",
      "diaphragm-wall": "Waterproof"
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "best",
      "sheet-pile": "best",
      "tangent-pile": "worst",
      micropile: "worst",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "max-height",
    label: "Max Height",
    description: "Typical maximum retained height range",
    values: {
      "soldier-pile": "8–12 m",
      "secant-pile": "20–40 m",
      "sheet-pile": "6–15 m",
      "tangent-pile": "10–20 m",
      micropile: "10–20 m",
      "diaphragm-wall": "30–50 m+"
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "installation-time",
    label: "Installation Time",
    description: "Speed of installation from mobilization to complete",
    values: {
      "soldier-pile": "Fast (2–4 wks)",
      "secant-pile": "Moderate–Slow (4–8 wks)",
      "sheet-pile": "Fast (1–3 wks)",
      "tangent-pile": "Moderate (3–6 wks)",
      micropile: "Slow (6–12 wks)",
      "diaphragm-wall": "Slow (8–16 wks)"
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "worst"
    }
  },
  {
    id: "deflection",
    label: "Deflection",
    description: "Typical lateral wall displacement range",
    values: {
      "soldier-pile": "High (25–50 mm)",
      "secant-pile": "Low (5–15 mm)",
      "sheet-pile": "Medium (10–30 mm)",
      "tangent-pile": "Medium (10–25 mm)",
      micropile: "Low–Medium (8–20 mm)",
      "diaphragm-wall": "Very Low (5–10 mm)"
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "good",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "water-control",
    label: "Water Control",
    description: "Effectiveness at controlling groundwater ingress",
    values: {
      "soldier-pile": "Poor",
      "secant-pile": "Excellent",
      "sheet-pile": "Good",
      "tangent-pile": "Poor",
      micropile: "Poor",
      "diaphragm-wall": "Excellent"
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "best",
      "sheet-pile": "good",
      "tangent-pile": "worst",
      micropile: "worst",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "noise-vibration",
    label: "Noise / Vibration",
    description: "Construction noise and vibration generation",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Low",
      "sheet-pile": "High",
      "tangent-pile": "Low",
      micropile: "Low",
      "diaphragm-wall": "Low"
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "best",
      "sheet-pile": "worst",
      "tangent-pile": "best",
      micropile: "best",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "mobilization-time",
    label: "Mobilization Time",
    description: "Time to mobilize equipment and begin work",
    values: {
      "soldier-pile": "Low (1–2 days)",
      "secant-pile": "Medium (1–2 wks)",
      "sheet-pile": "Low (2–4 days)",
      "tangent-pile": "Medium (1–2 wks)",
      micropile: "Medium (3–5 days)",
      "diaphragm-wall": "High (2–4 wks)"
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "worst"
    }
  },
  {
    id: "deformation",
    label: "Deformation",
    description: "Behavior character under lateral loading",
    values: {
      "soldier-pile": "Flexible",
      "secant-pile": "Rigid",
      "sheet-pile": "Semi-flexible",
      "tangent-pile": "Semi-rigid",
      micropile: "Flexible",
      "diaphragm-wall": "Very Rigid"
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "construction-speed",
    label: "Construction Speed",
    description: "Overall pace of wall construction",
    values: {
      "soldier-pile": "Fast",
      "secant-pile": "Moderate",
      "sheet-pile": "Fast",
      "tangent-pile": "Moderate",
      micropile: "Slow",
      "diaphragm-wall": "Slow"
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "poor"
    }
  },
  {
    id: "cost",
    label: "Cost",
    description: "Relative cost of installation per m²",
    values: {
      "soldier-pile": "Low ($200–400/m²)",
      "secant-pile": "High ($600–900/m²)",
      "sheet-pile": "Low–Med ($300–550/m²)",
      "tangent-pile": "Medium ($400–700/m²)",
      micropile: "High ($500–1200/m²)",
      "diaphragm-wall": "Very High ($900–1800/m²)"
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "poor",
      "sheet-pile": "good",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "worst"
    }
  },
  {
    id: "performance",
    label: "Performance",
    description: "Overall structural performance rating",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate–High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Excellent"
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "good",
      "diaphragm-wall": "best"
    }
  },
  {
    id: "urban-sustainability",
    label: "Urban Sustainability",
    description: "Suitability for sensitive urban environments",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "Good",
      "sheet-pile": "Low (vibration)",
      "tangent-pile": "Good",
      micropile: "Excellent",
      "diaphragm-wall": "Good"
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "good",
      "sheet-pile": "poor",
      "tangent-pile": "good",
      micropile: "best",
      "diaphragm-wall": "good"
    }
  }
];
const ALL_METRIC_IDS = METRIC_ROWS.map((r) => r.id);
const INPUT_EFFECT_ROWS = [
  {
    param: "Cohesion (C)",
    symbol: "c",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Friction Angle (φ)",
    symbol: "φ",
    unit: "°",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Modulus of Elasticity (E)",
    symbol: "E",
    unit: "MPa",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "High",
    modelComplexity: "Moderate"
  },
  {
    param: "Unit Weight (γ)",
    symbol: "γ",
    unit: "kN/m³",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "Minimal"
  },
  {
    param: "Poisson's Ratio (ν)",
    symbol: "ν",
    unit: "–",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Low",
      "tangent-pile": "Low",
      micropile: "Low",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "Moderate",
    modelComplexity: "Low"
  },
  {
    param: "Permeability (k)",
    symbol: "k",
    unit: "m/s",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "High"
  },
  {
    param: "Dilatancy Angle (ψ)",
    symbol: "ψ",
    unit: "°",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Low",
      "tangent-pile": "Low",
      micropile: "Moderate",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "Moderate",
    modelComplexity: "High"
  },
  {
    param: "Material Type",
    symbol: "–",
    unit: "steel/concrete/composite",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Young's Modulus of Structure (Es)",
    symbol: "Es",
    unit: "GPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "High",
    modelComplexity: "Low"
  },
  {
    param: "Moment of Inertia (I)",
    symbol: "I",
    unit: "m⁴",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "Low"
  },
  {
    param: "Cross-sectional Properties",
    symbol: "A, Sx",
    unit: "m², cm³/m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "Moderate",
    modelComplexity: "Low"
  },
  {
    param: "Reinforcement Details",
    symbol: "ρ",
    unit: "%",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "N/A",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Moderate",
    modelComplexity: "Moderate"
  },
  {
    param: "Excavation Depth (H)",
    symbol: "H",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Embedment Depth (D)",
    symbol: "D",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Pile Diameter (d)",
    symbol: "d",
    unit: "mm",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "High",
      "sheet-pile": "N/A",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "High",
    modelComplexity: "Low"
  },
  {
    param: "Pile Spacing (s)",
    symbol: "s",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "High",
      "diaphragm-wall": "N/A"
    },
    femImportance: "High",
    modelComplexity: "Moderate"
  },
  {
    param: "Wall Thickness (t)",
    symbol: "t",
    unit: "mm",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "N/A",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "Low"
  },
  {
    param: "Anchor Spacing & Inclination",
    symbol: "lh, α",
    unit: "m, °",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "High",
    modelComplexity: "High"
  },
  {
    param: "Surcharge Load (q)",
    symbol: "q",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "Low"
    },
    femImportance: "High",
    modelComplexity: "Low"
  },
  {
    param: "Lateral Earth Pressure",
    symbol: "pa",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Moderate"
  },
  {
    param: "Hydrostatic Pressure",
    symbol: "uw",
    unit: "kPa",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "High"
  },
  {
    param: "Seismic Loading",
    symbol: "ag",
    unit: "g",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Low"
    },
    femImportance: "High",
    modelComplexity: "Very High"
  },
  {
    param: "Construction Stage Loading",
    symbol: "–",
    unit: "stage",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "High"
  },
  {
    param: "Model Type (2D/3D)",
    symbol: "–",
    unit: "2D/3D",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Very High"
  },
  {
    param: "Element Type",
    symbol: "–",
    unit: "beam/plate/solid",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate"
    },
    femImportance: "High",
    modelComplexity: "Moderate"
  },
  {
    param: "Mesh Size & Refinement",
    symbol: "–",
    unit: "m",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "High"
  },
  {
    param: "Boundary Conditions",
    symbol: "–",
    unit: "–",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "Moderate"
  },
  {
    param: "Interface Properties (SSI)",
    symbol: "Ri",
    unit: "–",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "High"
  },
  {
    param: "Constitutive Soil Model",
    symbol: "–",
    unit: "MC/HS/HSS",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High"
    },
    femImportance: "Critical",
    modelComplexity: "Very High"
  },
  {
    param: "Initial Stress Conditions",
    symbol: "K0",
    unit: "–",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "High"
    },
    femImportance: "High",
    modelComplexity: "Moderate"
  }
];
const OUTPUT_RANGE_ROWS = [
  {
    param: "Lateral Wall Displacement",
    indicator: "Deformation & serviceability",
    unit: "mm",
    notes: "Max lateral movement at top of wall; lower = better for adjacent structures",
    values: {
      "soldier-pile": "25–75",
      "secant-pile": "5–20",
      "sheet-pile": "15–40",
      "tangent-pile": "10–30",
      micropile: "15–35",
      "diaphragm-wall": "5–15"
    },
    sortNumeric: {
      "soldier-pile": 50,
      "secant-pile": 12.5,
      "sheet-pile": 27.5,
      "tangent-pile": 20,
      micropile: 25,
      "diaphragm-wall": 10
    }
  },
  {
    param: "Ground Surface Settlement",
    indicator: "Deformation & serviceability",
    unit: "mm",
    notes: "Vertical settlement at ground surface behind wall; critical near existing structures",
    values: {
      "soldier-pile": "15–50",
      "secant-pile": "5–15",
      "sheet-pile": "10–30",
      "tangent-pile": "8–25",
      micropile: "10–20",
      "diaphragm-wall": "3–10"
    },
    sortNumeric: {
      "soldier-pile": 32.5,
      "secant-pile": 10,
      "sheet-pile": 20,
      "tangent-pile": 16.5,
      micropile: 15,
      "diaphragm-wall": 6.5
    }
  },
  {
    param: "Maximum Bending Moment",
    indicator: "Structural design",
    unit: "kNm/m",
    notes: "Maximum bending moment in wall section; governs structural section design",
    values: {
      "soldier-pile": "200–600",
      "secant-pile": "400–1200",
      "sheet-pile": "150–400",
      "tangent-pile": "300–800",
      micropile: "50–200",
      "diaphragm-wall": "800–2000"
    },
    sortNumeric: {
      "soldier-pile": 400,
      "secant-pile": 800,
      "sheet-pile": 275,
      "tangent-pile": 550,
      micropile: 125,
      "diaphragm-wall": 1400
    }
  },
  {
    param: "FOS — Sliding",
    indicator: "Overall stability",
    unit: "SF",
    notes: "Design target FOS > 1.5; accounts for horizontal force resistance at base",
    values: {
      "soldier-pile": "1.3–2.0",
      "secant-pile": "1.5–2.5",
      "sheet-pile": "1.4–2.2",
      "tangent-pile": "1.5–2.2",
      micropile: "1.5–2.5",
      "diaphragm-wall": "1.8–2.8"
    },
    sortNumeric: {
      "soldier-pile": 1.65,
      "secant-pile": 2,
      "sheet-pile": 1.8,
      "tangent-pile": 1.85,
      micropile: 2,
      "diaphragm-wall": 2.3
    }
  },
  {
    param: "FOS — Overturning",
    indicator: "Overall stability",
    unit: "SF",
    notes: "Design target FOS > 2.0; moment equilibrium about toe of wall",
    values: {
      "soldier-pile": "1.8–2.8",
      "secant-pile": "2.0–3.5",
      "sheet-pile": "1.8–3.0",
      "tangent-pile": "2.0–3.2",
      micropile: "2.0–3.5",
      "diaphragm-wall": "2.5–4.0"
    },
    sortNumeric: {
      "soldier-pile": 2.3,
      "secant-pile": 2.75,
      "sheet-pile": 2.4,
      "tangent-pile": 2.6,
      micropile: 2.75,
      "diaphragm-wall": 3.25
    }
  },
  {
    param: "FOS — Basal Heave / Failure",
    indicator: "Overall stability",
    unit: "SF",
    notes: "Design target FOS > 1.3 (heave) and > 1.5 (failure); critical in soft clay",
    values: {
      "soldier-pile": "1.3–2.0",
      "secant-pile": "1.5–2.5",
      "sheet-pile": "1.3–2.0",
      "tangent-pile": "1.5–2.3",
      micropile: "1.5–2.5",
      "diaphragm-wall": "1.8–3.0"
    },
    sortNumeric: {
      "soldier-pile": 1.65,
      "secant-pile": 2,
      "sheet-pile": 1.65,
      "tangent-pile": 1.9,
      micropile: 2,
      "diaphragm-wall": 2.4
    }
  },
  {
    param: "Load-Bearing Capacity",
    indicator: "System capacity",
    unit: "kN/m",
    notes: "Lateral load-bearing capacity per meter of wall run",
    values: {
      "soldier-pile": "200–600",
      "secant-pile": "500–1500",
      "sheet-pile": "300–800",
      "tangent-pile": "400–1000",
      micropile: "100–500 (per pile)",
      "diaphragm-wall": "1000–3000"
    },
    sortNumeric: {
      "soldier-pile": 400,
      "secant-pile": 1e3,
      "sheet-pile": 550,
      "tangent-pile": 700,
      micropile: 300,
      "diaphragm-wall": 2e3
    }
  },
  {
    param: "Axial Load Capacity",
    indicator: "Micropile-specific",
    unit: "kN/pile",
    notes: "Individual pile axial capacity; primary capacity mechanism for micropile walls",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "200–2000",
      "diaphragm-wall": "N/A"
    },
    sortNumeric: {
      "soldier-pile": 0,
      "secant-pile": 0,
      "sheet-pile": 0,
      "tangent-pile": 0,
      micropile: 1100,
      "diaphragm-wall": 0
    }
  },
  {
    param: "Grout-Ground Bond Strength",
    indicator: "Micropile-specific",
    unit: "kPa",
    notes: "Bond stress between grout and soil/rock; Type C/D grouting increases bond by 50–200%",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "100–3500",
      "diaphragm-wall": "N/A"
    },
    sortNumeric: {
      "soldier-pile": 0,
      "secant-pile": 0,
      "sheet-pile": 0,
      "tangent-pile": 0,
      micropile: 1800,
      "diaphragm-wall": 0
    }
  }
];
const INPUT_PARAM_OPTIONS = [
  { id: "cohesion", label: "Cohesion (C)", axisLabel: "c (kPa)" },
  { id: "friction-angle", label: "Friction Angle (φ)", axisLabel: "φ (°)" },
  {
    id: "elastic-modulus-soil",
    label: "Modulus of Elasticity (E)",
    axisLabel: "E (MPa)"
  },
  { id: "unit-weight", label: "Unit Weight (γ)", axisLabel: "γ (kN/m³)" },
  { id: "poissons-ratio", label: "Poisson's Ratio (ν)", axisLabel: "ν" },
  { id: "permeability", label: "Permeability (k)", axisLabel: "k (×10⁻⁵ m/s)" },
  { id: "dilatancy-angle", label: "Dilatancy Angle (ψ)", axisLabel: "ψ (°)" },
  {
    id: "material-type",
    label: "Material Type (index)",
    axisLabel: "material index"
  },
  {
    id: "youngs-modulus-structure",
    label: "Young's Modulus of Structure (Es)",
    axisLabel: "Es (GPa)"
  },
  {
    id: "moment-of-inertia",
    label: "Moment of Inertia (I)",
    axisLabel: "I (×10⁻⁴ m⁴)"
  },
  {
    id: "cross-sectional-properties",
    label: "Cross-sectional Properties (A)",
    axisLabel: "A (cm²)"
  },
  {
    id: "reinforcement-details",
    label: "Reinforcement Details (ρ)",
    axisLabel: "ρ (%)"
  },
  { id: "excavation-depth", label: "Excavation Depth (H)", axisLabel: "H (m)" },
  { id: "embedment-depth", label: "Embedment Depth (D)", axisLabel: "D (m)" },
  { id: "pile-diameter", label: "Pile Diameter (d)", axisLabel: "d (mm)" },
  { id: "pile-spacing", label: "Pile Spacing (s)", axisLabel: "s (m)" },
  { id: "wall-thickness", label: "Wall Thickness (t)", axisLabel: "t (mm)" },
  {
    id: "anchor-spacing-inclination",
    label: "Anchor Spacing & Inclination",
    axisLabel: "lh (m)"
  },
  { id: "surcharge-load", label: "Surcharge Load (q)", axisLabel: "q (kPa)" },
  {
    id: "lateral-earth-pressure",
    label: "Lateral Earth Pressure",
    axisLabel: "pa (kPa)"
  },
  {
    id: "hydrostatic-pressure",
    label: "Hydrostatic Pressure",
    axisLabel: "uw (kPa)"
  },
  { id: "seismic-loading", label: "Seismic Loading (ag)", axisLabel: "ag (g)" },
  {
    id: "construction-stage-loading",
    label: "Construction Stage Loading",
    axisLabel: "stage"
  },
  { id: "model-type", label: "Model Type (2D/3D)", axisLabel: "model type" },
  { id: "element-type", label: "Element Type", axisLabel: "element type" },
  { id: "mesh-size", label: "Mesh Size & Refinement", axisLabel: "mesh (m)" },
  {
    id: "boundary-conditions",
    label: "Boundary Conditions",
    axisLabel: "BC index"
  },
  {
    id: "interface-properties",
    label: "Interface Properties (SSI)",
    axisLabel: "Ri"
  },
  {
    id: "constitutive-soil-model",
    label: "Constitutive Soil Model",
    axisLabel: "model index"
  },
  {
    id: "initial-stress-conditions",
    label: "Initial Stress Conditions (K0)",
    axisLabel: "K0"
  },
  { id: "fem-importance", label: "FEM Importance", axisLabel: "FEM level" },
  {
    id: "model-complexity",
    label: "Model Complexity",
    axisLabel: "complexity"
  }
];
const OUTPUT_PARAM_OPTIONS = [
  {
    id: "lateral-displacement",
    label: "Lateral Wall Displacement (mm)",
    axisLabel: "δ (mm)"
  },
  {
    id: "surface-settlement",
    label: "Ground Surface Settlement (mm)",
    axisLabel: "s (mm)"
  },
  {
    id: "bending-moment",
    label: "Maximum Bending Moment (kNm/m)",
    axisLabel: "M (kNm/m)"
  },
  { id: "fos-sliding", label: "FOS — Sliding", axisLabel: "FOS sliding" },
  {
    id: "fos-overturning",
    label: "FOS — Overturning",
    axisLabel: "FOS overturn"
  },
  {
    id: "fos-failure",
    label: "FOS — Basal Heave / Failure",
    axisLabel: "FOS failure"
  },
  {
    id: "load-bearing-capacity",
    label: "Load-Bearing Capacity (kN/m)",
    axisLabel: "Q (kN/m)"
  },
  {
    id: "axial-load-capacity",
    label: "Axial Load Capacity (kN/pile)",
    axisLabel: "Qa (kN)"
  },
  {
    id: "bond-strength",
    label: "Grout-Ground Bond Strength (kPa)",
    axisLabel: "fs (kPa)"
  }
];
function pts(xs, baseLine, factor) {
  return xs.map((x, i) => ({
    x,
    y: Math.round(baseLine[i] * factor * 10) / 10
  }));
}
const SYSTEMS_LIST = [
  "soldier-pile",
  "secant-pile",
  "sheet-pile",
  "tangent-pile",
  "micropile",
  "diaphragm-wall"
];
const X = {
  cohesion: [0, 10, 20, 30, 50, 80, 120],
  "friction-angle": [20, 25, 28, 30, 32, 35, 38],
  "elastic-modulus-soil": [10, 20, 40, 80, 120, 200, 300],
  "unit-weight": [15, 16, 17, 18, 19, 20, 21],
  "poissons-ratio": [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
  permeability: [0.1, 0.5, 1, 2, 5, 10, 20],
  "dilatancy-angle": [0, 2, 4, 6, 8, 10, 12],
  "material-type": [1, 2, 3, 4, 5, 6, 7],
  "youngs-modulus-structure": [10, 25, 50, 100, 150, 200, 210],
  "moment-of-inertia": [1, 5, 10, 20, 40, 80, 160],
  "cross-sectional-properties": [50, 100, 200, 400, 600, 900, 1200],
  "reinforcement-details": [0, 0.5, 1, 1.5, 2, 2.5, 3],
  "excavation-depth": [4, 6, 8, 10, 12, 15, 20],
  "embedment-depth": [2, 3, 4, 5, 6, 8, 10],
  "pile-diameter": [150, 300, 450, 600, 750, 900, 1050],
  "pile-spacing": [1, 1.5, 2, 2.5, 3, 3.5, 4],
  "wall-thickness": [200, 400, 600, 800, 1e3, 1200, 1500],
  "anchor-spacing-inclination": [1.5, 2, 2.5, 3, 3.5, 4, 5],
  "surcharge-load": [0, 10, 20, 40, 60, 80, 100],
  "lateral-earth-pressure": [10, 20, 30, 40, 60, 80, 100],
  "hydrostatic-pressure": [0, 20, 40, 60, 80, 100, 120],
  "seismic-loading": [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4],
  "construction-stage-loading": [1, 2, 3, 4, 5, 6, 7],
  "model-type": [1, 2, 3, 4, 5, 6, 7],
  "element-type": [1, 2, 3, 4, 5, 6, 7],
  "mesh-size": [0.1, 0.25, 0.5, 1, 1.5, 2, 3],
  "boundary-conditions": [1, 2, 3, 4, 5, 6, 7],
  "interface-properties": [0.5, 0.6, 0.67, 0.75, 0.8, 0.9, 1],
  "constitutive-soil-model": [1, 2, 3, 4, 5, 6, 7],
  "initial-stress-conditions": [0.4, 0.5, 0.6, 0.7, 0.8, 1, 1.2],
  "fem-importance": [1, 2, 3, 4, 5, 6, 7],
  "model-complexity": [1, 2, 3, 4, 5, 6, 7]
};
const BASE = {
  cohesion: {
    "lateral-displacement": [55, 50, 42, 35, 25, 18, 12],
    "surface-settlement": [40, 36, 30, 25, 18, 13, 9],
    "bending-moment": [200, 220, 250, 280, 320, 380, 450],
    "fos-sliding": [1.2, 1.35, 1.5, 1.65, 1.8, 2, 2.2],
    "fos-overturning": [1.5, 1.7, 1.9, 2.1, 2.3, 2.6, 3],
    "fos-failure": [1.1, 1.3, 1.5, 1.65, 1.8, 2, 2.2],
    "load-bearing-capacity": [250, 320, 420, 540, 700, 900, 1100],
    "axial-load-capacity": [200, 260, 350, 450, 580, 750, 950],
    "bond-strength": [100, 180, 300, 500, 800, 1200, 1800]
  },
  "friction-angle": {
    "lateral-displacement": [75, 60, 50, 42, 35, 25, 18],
    "surface-settlement": [55, 44, 37, 31, 25, 18, 13],
    "bending-moment": [350, 280, 240, 210, 180, 140, 110],
    "fos-sliding": [1.1, 1.25, 1.4, 1.55, 1.7, 1.9, 2.1],
    "fos-overturning": [1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8],
    "fos-failure": [1.1, 1.25, 1.4, 1.55, 1.7, 1.9, 2.1],
    "load-bearing-capacity": [200, 300, 400, 520, 650, 820, 1e3],
    "axial-load-capacity": [150, 230, 330, 450, 590, 770, 980],
    "bond-strength": [80, 150, 250, 400, 620, 950, 1400]
  },
  "elastic-modulus-soil": {
    "lateral-displacement": [65, 52, 40, 30, 22, 15, 10],
    "surface-settlement": [48, 38, 29, 22, 16, 11, 7],
    "bending-moment": [350, 310, 270, 230, 190, 150, 120],
    "fos-sliding": [1.3, 1.45, 1.6, 1.75, 1.88, 2, 2.1],
    "fos-overturning": [1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8],
    "fos-failure": [1.2, 1.38, 1.55, 1.7, 1.85, 2, 2.1],
    "load-bearing-capacity": [250, 350, 480, 620, 760, 920, 1080],
    "axial-load-capacity": [180, 270, 390, 530, 680, 840, 1020],
    "bond-strength": [120, 200, 320, 500, 720, 980, 1300]
  },
  "unit-weight": {
    "lateral-displacement": [20, 25, 30, 38, 46, 55, 65],
    "surface-settlement": [14, 18, 22, 28, 34, 42, 52],
    "bending-moment": [100, 140, 190, 250, 320, 400, 500],
    "fos-sliding": [2.2, 2.05, 1.9, 1.75, 1.6, 1.45, 1.3],
    "fos-overturning": [2.8, 2.6, 2.4, 2.2, 2, 1.8, 1.6],
    "fos-failure": [2.1, 1.95, 1.8, 1.65, 1.5, 1.35, 1.2],
    "load-bearing-capacity": [300, 400, 520, 660, 820, 990, 1180],
    "axial-load-capacity": [240, 320, 420, 540, 680, 840, 1020],
    "bond-strength": [200, 280, 380, 500, 650, 840, 1050]
  },
  "poissons-ratio": {
    "lateral-displacement": [18, 22, 27, 33, 40, 48, 58],
    "surface-settlement": [13, 16, 20, 25, 30, 37, 46],
    "bending-moment": [180, 210, 245, 285, 330, 385, 450],
    "fos-sliding": [2, 1.9, 1.8, 1.7, 1.6, 1.5, 1.35],
    "fos-overturning": [2.5, 2.35, 2.2, 2.05, 1.9, 1.75, 1.6],
    "fos-failure": [1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.25],
    "load-bearing-capacity": [700, 650, 590, 520, 450, 370, 290],
    "axial-load-capacity": [560, 510, 460, 400, 340, 270, 200],
    "bond-strength": [900, 820, 730, 620, 510, 390, 280]
  },
  permeability: {
    "lateral-displacement": [12, 15, 20, 28, 38, 52, 68],
    "surface-settlement": [9, 12, 16, 22, 30, 42, 56],
    "bending-moment": [150, 180, 215, 260, 315, 380, 460],
    "fos-sliding": [2.1, 1.95, 1.8, 1.65, 1.5, 1.35, 1.2],
    "fos-overturning": [2.6, 2.4, 2.2, 2, 1.8, 1.6, 1.4],
    "fos-failure": [2, 1.85, 1.7, 1.55, 1.4, 1.25, 1.1],
    "load-bearing-capacity": [750, 680, 600, 510, 420, 320, 220],
    "axial-load-capacity": [600, 540, 470, 390, 310, 230, 160],
    "bond-strength": [1100, 980, 840, 690, 540, 390, 250]
  },
  "dilatancy-angle": {
    "lateral-displacement": [55, 48, 42, 36, 30, 24, 18],
    "surface-settlement": [42, 36, 31, 26, 22, 17, 13],
    "bending-moment": [280, 255, 230, 205, 180, 155, 130],
    "fos-sliding": [1.3, 1.42, 1.55, 1.68, 1.8, 1.95, 2.1],
    "fos-overturning": [1.6, 1.75, 1.9, 2.05, 2.2, 2.38, 2.55],
    "fos-failure": [1.2, 1.34, 1.48, 1.62, 1.75, 1.9, 2.05],
    "load-bearing-capacity": [300, 380, 470, 570, 680, 800, 930],
    "axial-load-capacity": [240, 310, 390, 480, 580, 690, 810],
    "bond-strength": [200, 280, 380, 500, 650, 830, 1050]
  },
  "material-type": {
    "lateral-displacement": [65, 52, 40, 30, 22, 16, 12],
    "surface-settlement": [50, 40, 30, 22, 16, 12, 9],
    "bending-moment": [150, 220, 310, 420, 540, 680, 840],
    "fos-sliding": [1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
    "fos-overturning": [1.5, 1.75, 2, 2.25, 2.5, 2.75, 3],
    "fos-failure": [1.1, 1.32, 1.55, 1.78, 2, 2.22, 2.4],
    "load-bearing-capacity": [200, 320, 460, 620, 800, 1e3, 1200],
    "axial-load-capacity": [160, 260, 380, 520, 680, 860, 1060],
    "bond-strength": [120, 220, 360, 540, 760, 1020, 1320]
  },
  "youngs-modulus-structure": {
    "lateral-displacement": [70, 55, 42, 32, 24, 17, 12],
    "surface-settlement": [54, 42, 32, 24, 18, 13, 9],
    "bending-moment": [120, 180, 260, 360, 470, 590, 720],
    "fos-sliding": [1.25, 1.42, 1.6, 1.78, 1.96, 2.14, 2.3],
    "fos-overturning": [1.55, 1.75, 1.95, 2.18, 2.4, 2.6, 2.8],
    "fos-failure": [1.15, 1.34, 1.54, 1.74, 1.92, 2.1, 2.28],
    "load-bearing-capacity": [220, 340, 490, 660, 840, 1040, 1250],
    "axial-load-capacity": [180, 280, 410, 560, 730, 920, 1120],
    "bond-strength": [140, 240, 380, 560, 780, 1040, 1340]
  },
  "moment-of-inertia": {
    "lateral-displacement": [80, 60, 44, 32, 22, 15, 10],
    "surface-settlement": [62, 47, 34, 24, 17, 11, 8],
    "bending-moment": [100, 160, 240, 350, 480, 630, 800],
    "fos-sliding": [1.2, 1.4, 1.62, 1.84, 2.06, 2.28, 2.5],
    "fos-overturning": [1.5, 1.72, 1.98, 2.24, 2.5, 2.76, 3],
    "fos-failure": [1.1, 1.32, 1.56, 1.8, 2.04, 2.26, 2.48],
    "load-bearing-capacity": [180, 300, 450, 630, 830, 1050, 1280],
    "axial-load-capacity": [140, 240, 370, 530, 710, 920, 1150],
    "bond-strength": [110, 200, 330, 500, 710, 970, 1280]
  },
  "cross-sectional-properties": {
    "lateral-displacement": [75, 58, 43, 31, 22, 15, 10],
    "surface-settlement": [58, 44, 32, 23, 16, 11, 7],
    "bending-moment": [110, 170, 250, 360, 490, 640, 810],
    "fos-sliding": [1.2, 1.42, 1.64, 1.86, 2.08, 2.3, 2.5],
    "fos-overturning": [1.5, 1.74, 2, 2.26, 2.52, 2.78, 3],
    "fos-failure": [1.1, 1.34, 1.58, 1.82, 2.06, 2.28, 2.5],
    "load-bearing-capacity": [190, 310, 460, 640, 840, 1060, 1290],
    "axial-load-capacity": [150, 250, 380, 540, 720, 930, 1160],
    "bond-strength": [120, 210, 340, 510, 720, 980, 1290]
  },
  "reinforcement-details": {
    "lateral-displacement": [60, 52, 44, 36, 28, 20, 13],
    "surface-settlement": [46, 40, 33, 27, 21, 15, 10],
    "bending-moment": [150, 220, 300, 390, 490, 600, 720],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.6, 1.8, 2, 2.22, 2.44, 2.66, 2.88],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
    "load-bearing-capacity": [220, 340, 480, 640, 820, 1020, 1240],
    "axial-load-capacity": [180, 280, 410, 560, 730, 920, 1130],
    "bond-strength": [140, 240, 370, 530, 720, 940, 1200]
  },
  "excavation-depth": {
    "lateral-displacement": [8, 15, 25, 38, 52, 70, 100],
    "surface-settlement": [6, 11, 18, 28, 40, 56, 82],
    "bending-moment": [40, 100, 200, 380, 600, 950, 1600],
    "fos-sliding": [2.5, 2.1, 1.8, 1.55, 1.35, 1.2, 1.05],
    "fos-overturning": [3.2, 2.7, 2.3, 2, 1.72, 1.5, 1.3],
    "fos-failure": [2.4, 2, 1.7, 1.45, 1.25, 1.1, 0.95],
    "load-bearing-capacity": [900, 800, 700, 580, 460, 340, 200],
    "axial-load-capacity": [720, 640, 560, 460, 360, 260, 150],
    "bond-strength": [1200, 1060, 920, 760, 600, 440, 260]
  },
  "embedment-depth": {
    "lateral-displacement": [85, 62, 45, 32, 23, 16, 11],
    "surface-settlement": [65, 47, 34, 24, 17, 12, 8],
    "bending-moment": [500, 420, 340, 265, 200, 145, 100],
    "fos-sliding": [1.1, 1.35, 1.6, 1.85, 2.1, 2.35, 2.6],
    "fos-overturning": [1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1],
    "fos-failure": [1, 1.28, 1.56, 1.84, 2.12, 2.4, 2.68],
    "load-bearing-capacity": [250, 380, 530, 700, 880, 1080, 1300],
    "axial-load-capacity": [200, 310, 440, 590, 760, 950, 1160],
    "bond-strength": [160, 260, 390, 550, 740, 960, 1210]
  },
  "pile-diameter": {
    "lateral-displacement": [55, 40, 30, 22, 16, 12, 9],
    "surface-settlement": [42, 31, 22, 16, 12, 9, 7],
    "bending-moment": [220, 280, 350, 420, 500, 590, 680],
    "fos-sliding": [1.3, 1.5, 1.7, 1.9, 2.1, 2.25, 2.4],
    "fos-overturning": [1.6, 1.82, 2.04, 2.26, 2.48, 2.68, 2.88],
    "fos-failure": [1.2, 1.42, 1.64, 1.86, 2.08, 2.28, 2.48],
    "load-bearing-capacity": [200, 350, 520, 700, 880, 1050, 1220],
    "axial-load-capacity": [160, 280, 430, 600, 780, 970, 1170],
    "bond-strength": [130, 240, 390, 570, 780, 1010, 1270]
  },
  "pile-spacing": {
    "lateral-displacement": [18, 25, 32, 40, 52, 65, 80],
    "surface-settlement": [13, 18, 24, 31, 41, 52, 66],
    "bending-moment": [80, 130, 190, 260, 340, 430, 550],
    "fos-sliding": [2.2, 2, 1.8, 1.6, 1.4, 1.25, 1.1],
    "fos-overturning": [2.8, 2.55, 2.3, 2.05, 1.8, 1.58, 1.38],
    "fos-failure": [2.1, 1.9, 1.7, 1.5, 1.3, 1.15, 1],
    "load-bearing-capacity": [950, 800, 650, 500, 380, 280, 200],
    "axial-load-capacity": [760, 640, 520, 400, 300, 220, 160],
    "bond-strength": [1100, 920, 740, 560, 420, 300, 210]
  },
  "wall-thickness": {
    "lateral-displacement": [72, 54, 40, 29, 20, 14, 10],
    "surface-settlement": [56, 41, 30, 22, 15, 10, 7],
    "bending-moment": [120, 190, 280, 390, 510, 650, 810],
    "fos-sliding": [1.2, 1.44, 1.68, 1.92, 2.16, 2.38, 2.6],
    "fos-overturning": [1.5, 1.76, 2.02, 2.28, 2.54, 2.78, 3.02],
    "fos-failure": [1.1, 1.36, 1.62, 1.88, 2.14, 2.38, 2.6],
    "load-bearing-capacity": [180, 310, 470, 660, 870, 1090, 1330],
    "axial-load-capacity": [140, 250, 390, 560, 750, 960, 1190],
    "bond-strength": [110, 210, 350, 530, 740, 990, 1280]
  },
  "anchor-spacing-inclination": {
    "lateral-displacement": [12, 18, 26, 36, 48, 62, 78],
    "surface-settlement": [9, 14, 20, 28, 38, 50, 64],
    "bending-moment": [500, 420, 340, 265, 200, 145, 100],
    "fos-sliding": [2.3, 2.1, 1.9, 1.7, 1.5, 1.32, 1.15],
    "fos-overturning": [2.9, 2.65, 2.4, 2.15, 1.9, 1.66, 1.44],
    "fos-failure": [2.2, 2, 1.8, 1.6, 1.4, 1.22, 1.05],
    "load-bearing-capacity": [900, 780, 650, 520, 400, 295, 210],
    "axial-load-capacity": [720, 620, 520, 415, 315, 230, 165],
    "bond-strength": [1050, 900, 745, 585, 440, 315, 215]
  },
  "surcharge-load": {
    "lateral-displacement": [20, 28, 38, 52, 65, 80, 95],
    "surface-settlement": [14, 20, 28, 40, 52, 65, 80],
    "bending-moment": [100, 160, 230, 340, 460, 580, 700],
    "fos-sliding": [2.3, 2.1, 1.9, 1.65, 1.45, 1.28, 1.12],
    "fos-overturning": [2.9, 2.65, 2.38, 2.1, 1.82, 1.58, 1.38],
    "fos-failure": [2.2, 2, 1.8, 1.55, 1.35, 1.18, 1.02],
    "load-bearing-capacity": [850, 750, 640, 510, 390, 280, 180],
    "axial-load-capacity": [680, 600, 510, 405, 305, 220, 140],
    "bond-strength": [1e3, 880, 745, 585, 440, 310, 195]
  },
  "lateral-earth-pressure": {
    "lateral-displacement": [10, 18, 28, 42, 58, 76, 98],
    "surface-settlement": [7, 13, 21, 32, 46, 62, 82],
    "bending-moment": [80, 150, 240, 360, 500, 660, 840],
    "fos-sliding": [2.6, 2.3, 2, 1.7, 1.45, 1.22, 1.02],
    "fos-overturning": [3.2, 2.8, 2.4, 2.05, 1.72, 1.42, 1.18],
    "fos-failure": [2.5, 2.2, 1.9, 1.6, 1.35, 1.12, 0.92],
    "load-bearing-capacity": [1e3, 860, 710, 560, 420, 300, 190],
    "axial-load-capacity": [800, 680, 560, 440, 325, 225, 140],
    "bond-strength": [1200, 1020, 840, 650, 480, 330, 200]
  },
  "hydrostatic-pressure": {
    "lateral-displacement": [12, 18, 26, 38, 52, 70, 92],
    "surface-settlement": [8, 13, 19, 29, 41, 56, 76],
    "bending-moment": [100, 165, 245, 360, 500, 660, 840],
    "fos-sliding": [2.4, 2.15, 1.9, 1.65, 1.42, 1.22, 1.04],
    "fos-overturning": [3, 2.68, 2.36, 2.04, 1.74, 1.48, 1.24],
    "fos-failure": [2.3, 2.05, 1.8, 1.55, 1.32, 1.12, 0.94],
    "load-bearing-capacity": [950, 820, 680, 540, 405, 285, 180],
    "axial-load-capacity": [760, 655, 545, 430, 320, 225, 140],
    "bond-strength": [1100, 950, 785, 615, 455, 315, 195]
  },
  "seismic-loading": {
    "lateral-displacement": [18, 26, 38, 54, 72, 92, 118],
    "surface-settlement": [13, 19, 28, 41, 56, 74, 98],
    "bending-moment": [120, 195, 290, 420, 570, 740, 940],
    "fos-sliding": [2.5, 2.2, 1.9, 1.62, 1.36, 1.14, 0.95],
    "fos-overturning": [3.1, 2.74, 2.38, 2.02, 1.68, 1.4, 1.14],
    "fos-failure": [2.4, 2.1, 1.82, 1.54, 1.28, 1.06, 0.88],
    "load-bearing-capacity": [980, 840, 690, 535, 390, 265, 160],
    "axial-load-capacity": [785, 670, 550, 425, 305, 205, 125],
    "bond-strength": [1150, 985, 805, 620, 450, 300, 180]
  },
  "construction-stage-loading": {
    "lateral-displacement": [12, 20, 30, 44, 60, 78, 100],
    "surface-settlement": [8, 14, 22, 33, 46, 61, 80],
    "bending-moment": [90, 160, 260, 390, 540, 710, 900],
    "fos-sliding": [2.6, 2.3, 2, 1.7, 1.42, 1.18, 0.98],
    "fos-overturning": [3.2, 2.84, 2.48, 2.12, 1.76, 1.46, 1.2],
    "fos-failure": [2.5, 2.2, 1.9, 1.62, 1.35, 1.1, 0.9],
    "load-bearing-capacity": [1e3, 860, 705, 545, 395, 265, 160],
    "axial-load-capacity": [800, 690, 565, 435, 310, 205, 125],
    "bond-strength": [1200, 1030, 845, 650, 465, 305, 185]
  },
  "model-type": {
    "lateral-displacement": [48, 40, 32, 25, 19, 14, 10],
    "surface-settlement": [37, 30, 24, 19, 14, 10, 7],
    "bending-moment": [260, 310, 365, 425, 490, 560, 640],
    "fos-sliding": [1.4, 1.55, 1.7, 1.85, 2, 2.15, 2.3],
    "fos-overturning": [1.75, 1.93, 2.11, 2.3, 2.49, 2.68, 2.87],
    "fos-failure": [1.3, 1.46, 1.62, 1.78, 1.94, 2.1, 2.26],
    "load-bearing-capacity": [380, 490, 610, 740, 880, 1030, 1190],
    "axial-load-capacity": [300, 400, 510, 630, 760, 900, 1060],
    "bond-strength": [340, 460, 600, 760, 940, 1140, 1360]
  },
  "element-type": {
    "lateral-displacement": [45, 38, 30, 23, 18, 13, 9],
    "surface-settlement": [34, 28, 22, 17, 13, 10, 7],
    "bending-moment": [240, 295, 355, 420, 490, 565, 645],
    "fos-sliding": [1.35, 1.52, 1.69, 1.86, 2.03, 2.2, 2.37],
    "fos-overturning": [1.7, 1.9, 2.1, 2.3, 2.5, 2.7, 2.9],
    "fos-failure": [1.25, 1.44, 1.63, 1.82, 2.01, 2.2, 2.39],
    "load-bearing-capacity": [360, 475, 600, 735, 880, 1035, 1200],
    "axial-load-capacity": [285, 385, 500, 625, 760, 905, 1060],
    "bond-strength": [320, 445, 590, 755, 940, 1145, 1370]
  },
  "mesh-size": {
    "lateral-displacement": [8, 12, 18, 28, 40, 55, 72],
    "surface-settlement": [6, 9, 14, 21, 31, 44, 59],
    "bending-moment": [600, 540, 460, 370, 285, 210, 150],
    "fos-sliding": [2.3, 2.1, 1.9, 1.68, 1.48, 1.3, 1.14],
    "fos-overturning": [2.9, 2.64, 2.38, 2.1, 1.84, 1.6, 1.4],
    "fos-failure": [2.2, 2, 1.8, 1.58, 1.38, 1.2, 1.04],
    "load-bearing-capacity": [1050, 920, 775, 620, 475, 345, 235],
    "axial-load-capacity": [840, 735, 620, 495, 375, 270, 185],
    "bond-strength": [1250, 1095, 920, 735, 555, 395, 265]
  },
  "boundary-conditions": {
    "lateral-displacement": [50, 42, 35, 28, 22, 17, 13],
    "surface-settlement": [38, 32, 26, 21, 16, 12, 9],
    "bending-moment": [270, 320, 375, 435, 500, 570, 645],
    "fos-sliding": [1.38, 1.54, 1.7, 1.86, 2.02, 2.18, 2.34],
    "fos-overturning": [1.72, 1.9, 2.08, 2.28, 2.48, 2.68, 2.88],
    "fos-failure": [1.28, 1.46, 1.64, 1.82, 2, 2.18, 2.36],
    "load-bearing-capacity": [370, 480, 600, 730, 870, 1020, 1180],
    "axial-load-capacity": [295, 395, 510, 635, 770, 915, 1070],
    "bond-strength": [330, 455, 600, 765, 950, 1155, 1380]
  },
  "interface-properties": {
    "lateral-displacement": [75, 60, 48, 37, 27, 18, 12],
    "surface-settlement": [58, 46, 36, 28, 20, 14, 9],
    "bending-moment": [320, 290, 258, 225, 192, 160, 130],
    "fos-sliding": [1.2, 1.38, 1.56, 1.74, 1.92, 2.1, 2.28],
    "fos-overturning": [1.5, 1.7, 1.92, 2.14, 2.36, 2.58, 2.8],
    "fos-failure": [1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3],
    "load-bearing-capacity": [240, 360, 500, 660, 840, 1040, 1260],
    "axial-load-capacity": [190, 295, 420, 565, 730, 920, 1130],
    "bond-strength": [200, 330, 500, 710, 970, 1280, 1640]
  },
  "constitutive-soil-model": {
    "lateral-displacement": [52, 44, 36, 29, 23, 18, 14],
    "surface-settlement": [40, 33, 27, 22, 17, 13, 10],
    "bending-moment": [245, 295, 350, 410, 475, 545, 620],
    "fos-sliding": [1.32, 1.5, 1.68, 1.86, 2.04, 2.22, 2.4],
    "fos-overturning": [1.64, 1.84, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.22, 1.42, 1.62, 1.82, 2.02, 2.22, 2.42],
    "load-bearing-capacity": [350, 460, 580, 710, 850, 1e3, 1160],
    "axial-load-capacity": [275, 375, 490, 615, 750, 895, 1050],
    "bond-strength": [310, 430, 570, 730, 910, 1110, 1330]
  },
  "initial-stress-conditions": {
    "lateral-displacement": [15, 20, 26, 34, 44, 56, 70],
    "surface-settlement": [11, 15, 20, 26, 34, 44, 56],
    "bending-moment": [140, 185, 240, 305, 380, 465, 560],
    "fos-sliding": [2.2, 2, 1.8, 1.6, 1.4, 1.22, 1.06],
    "fos-overturning": [2.76, 2.5, 2.24, 2, 1.76, 1.52, 1.3],
    "fos-failure": [2.1, 1.9, 1.7, 1.5, 1.3, 1.12, 0.96],
    "load-bearing-capacity": [920, 800, 675, 545, 415, 295, 195],
    "axial-load-capacity": [735, 640, 540, 435, 330, 235, 155],
    "bond-strength": [1080, 940, 790, 635, 480, 340, 220]
  },
  "fem-importance": {
    "lateral-displacement": [60, 50, 40, 32, 25, 19, 14],
    "surface-settlement": [46, 38, 30, 24, 18, 14, 10],
    "bending-moment": [200, 260, 330, 410, 500, 600, 710],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.62, 1.82, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
    "load-bearing-capacity": [300, 410, 535, 670, 820, 980, 1150],
    "axial-load-capacity": [240, 335, 445, 565, 700, 845, 1005],
    "bond-strength": [270, 390, 535, 700, 890, 1105, 1340]
  },
  "model-complexity": {
    "lateral-displacement": [55, 46, 37, 29, 23, 17, 12],
    "surface-settlement": [42, 35, 28, 22, 17, 12, 9],
    "bending-moment": [220, 275, 338, 408, 484, 566, 654],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.62, 1.83, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
    "load-bearing-capacity": [310, 420, 545, 680, 830, 990, 1160],
    "axial-load-capacity": [248, 345, 455, 578, 714, 860, 1020],
    "bond-strength": [280, 400, 545, 712, 904, 1120, 1360]
  }
};
const SCALE = {
  "lateral-displacement": {
    "soldier-pile": 1.5,
    "secant-pile": 0.9,
    "sheet-pile": 1.2,
    "tangent-pile": 1,
    micropile: 0.5,
    "diaphragm-wall": 0.25
  },
  "surface-settlement": {
    "soldier-pile": 1.4,
    "secant-pile": 0.85,
    "sheet-pile": 1.15,
    "tangent-pile": 0.95,
    micropile: 0.55,
    "diaphragm-wall": 0.3
  },
  "bending-moment": {
    "soldier-pile": 0.5,
    "secant-pile": 1.2,
    "sheet-pile": 0.9,
    "tangent-pile": 1,
    micropile: 0.15,
    "diaphragm-wall": 2.2
  },
  "fos-sliding": {
    "soldier-pile": 0.8,
    "secant-pile": 1.05,
    "sheet-pile": 0.9,
    "tangent-pile": 0.95,
    micropile: 1.1,
    "diaphragm-wall": 1.25
  },
  "fos-overturning": {
    "soldier-pile": 0.78,
    "secant-pile": 1.02,
    "sheet-pile": 0.88,
    "tangent-pile": 0.93,
    micropile: 1.08,
    "diaphragm-wall": 1.22
  },
  "fos-failure": {
    "soldier-pile": 0.82,
    "secant-pile": 1.06,
    "sheet-pile": 0.91,
    "tangent-pile": 0.96,
    micropile: 1.12,
    "diaphragm-wall": 1.28
  },
  "load-bearing-capacity": {
    "soldier-pile": 0.4,
    "secant-pile": 1.2,
    "sheet-pile": 0.75,
    "tangent-pile": 0.95,
    micropile: 0.65,
    "diaphragm-wall": 2.3
  },
  "axial-load-capacity": {
    "soldier-pile": 0,
    "secant-pile": 0,
    "sheet-pile": 0,
    "tangent-pile": 0,
    micropile: 2.2,
    "diaphragm-wall": 0
  },
  "bond-strength": {
    "soldier-pile": 0,
    "secant-pile": 0,
    "sheet-pile": 0,
    "tangent-pile": 0,
    micropile: 1.8,
    "diaphragm-wall": 0
  }
};
const ALL_INPUT_KEYS = Object.keys(BASE);
const ALL_OUTPUT_KEYS = [
  "lateral-displacement",
  "surface-settlement",
  "bending-moment",
  "fos-sliding",
  "fos-overturning",
  "fos-failure",
  "load-bearing-capacity",
  "axial-load-capacity",
  "bond-strength"
];
const GRAPH_DATA = ALL_INPUT_KEYS.reduce((acc, inputKey) => {
  acc[inputKey] = ALL_OUTPUT_KEYS.reduce(
    (oAcc, outputKey) => {
      const baseCurve = BASE[inputKey][outputKey];
      const xs = X[inputKey];
      oAcc[outputKey] = SYSTEMS_LIST.reduce((sAcc, sysId) => {
        sAcc[sysId] = pts(xs, baseCurve, SCALE[outputKey][sysId]);
        return sAcc;
      }, {});
      return oAcc;
    },
    {}
  );
  return acc;
}, {});
const SYSTEMS = [
  {
    id: "soldier-pile",
    name: "Soldier Pile Wall",
    wallType: WallType.SoldierPile,
    description: "H-piles or steel I-beams driven at regular intervals with timber or concrete lagging spanning between them. Cost-effective for temporary support in competent soils."
  },
  {
    id: "secant-pile",
    name: "Secant Pile Wall",
    wallType: WallType.SecantPile,
    description: "Interlocking bored concrete piles providing a continuous, near-watertight wall. Primary and secondary piles interlock to cut off groundwater."
  },
  {
    id: "sheet-pile",
    name: "Sheet Pile Wall",
    wallType: WallType.SheetPile,
    description: "Interlocking steel or vinyl sections driven into the ground forming a continuous wall. Excellent for water retention and temporary/permanent support."
  },
  {
    id: "tangent-pile",
    name: "Tangent Pile Wall",
    wallType: WallType.TangentPile,
    description: "Bored concrete piles installed tangentially (touching but not overlapping). Effective in soft to medium soils; moderate water control through tight tolerances."
  },
  {
    id: "micropile",
    name: "Micropile Wall",
    wallType: WallType.Micropile,
    description: "Small-diameter (75–300 mm) high-capacity drilled and grouted piles. Ideal for restricted access, underpinning, and sites with obstructions or karst conditions."
  },
  {
    id: "diaphragm-wall",
    name: "Diaphragm Wall",
    wallType: WallType.DiaphragmWall,
    description: "Reinforced concrete walls cast in-situ in narrow trenches stabilized with bentonite slurry. Maximum stiffness and water control for deep urban excavations."
  }
];
const COMPARISON_METRICS = [
  {
    systemId: "soldier-pile",
    costRange: "$200–400/m²",
    maxHeight: 12,
    installationTime: "Fast (2–4 weeks)",
    deflection: "High (25–75 mm)",
    waterControl: "Poor",
    noisyVibration: "Moderate",
    mobilizationTime: "1–2 days"
  },
  {
    systemId: "secant-pile",
    costRange: "$600–900/m²",
    maxHeight: 20,
    installationTime: "Medium (4–8 weeks)",
    deflection: "Low–Medium (10–40 mm)",
    waterControl: "Good",
    noisyVibration: "Low",
    mobilizationTime: "1–2 weeks"
  },
  {
    systemId: "sheet-pile",
    costRange: "$300–550/m²",
    maxHeight: 15,
    installationTime: "Fast (1–3 weeks)",
    deflection: "Medium (15–50 mm)",
    waterControl: "Good",
    noisyVibration: "High",
    mobilizationTime: "2–4 days"
  },
  {
    systemId: "tangent-pile",
    costRange: "$400–700/m²",
    maxHeight: 18,
    installationTime: "Medium (3–6 weeks)",
    deflection: "Medium (12–45 mm)",
    waterControl: "Moderate",
    noisyVibration: "Low",
    mobilizationTime: "1–2 weeks"
  },
  {
    systemId: "micropile",
    costRange: "$500–1200/m²",
    maxHeight: 10,
    installationTime: "Slow (6–12 weeks)",
    deflection: "Low (5–20 mm)",
    waterControl: "Poor–Moderate",
    noisyVibration: "Low",
    mobilizationTime: "3–5 days"
  },
  {
    systemId: "diaphragm-wall",
    costRange: "$900–1800/m²",
    maxHeight: 40,
    installationTime: "Slow (8–16 weeks)",
    deflection: "Very Low (5–25 mm)",
    waterControl: "Excellent",
    noisyVibration: "Very Low",
    mobilizationTime: "2–4 weeks"
  }
];
const RESEARCH_PAPERS = [
  {
    id: "p001",
    title: "Numerical Analysis of Soldier Pile Walls in Soft Clay Using FEM",
    authors: "Zhang, W.; Goh, A.T.C.; Wei, F.; Zhang, Y.",
    year: 2021,
    method: "Finite Element Method (FEM) – Plaxis 2D",
    keyParameters: "φ=28°, c=10 kPa, E=15 MPa, pile spacing 2.5 m, H=8 m, δ_max=42 mm",
    categories: ["soldier-pile", "fem", "soft-clay"],
    abstract: "This study presents FEM-based deformation analysis of soldier pile retaining walls embedded in soft clay deposits using Plaxis 2D with Hardening Soil model. Parametric studies varied excavation depth (6–12 m), pile spacing (1.5–3.5 m), and surcharge intensity (0–50 kPa). Results show maximum lateral displacement of 42 mm at 8 m excavation depth, with surcharge loading increasing displacements by 35% and pile spacing exceeding 2.5 m causing soil arching failure.",
    conclusion: "Soldier pile walls in soft clay (cu < 30 kPa) require pile spacing ≤ 2.0 m to prevent inter-pile soil failure. A minimum embedment ratio D/H = 0.6 with single anchor level limits maximum lateral deflection to 0.5% H, maintaining serviceability for adjacent structures.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2021.104123"
  },
  {
    id: "p002",
    title: "Performance Comparison of Secant vs. Tangent Pile Walls in Urban Excavation",
    authors: "Zdravkovic, L.; Potts, D.M.; St John, H.D.",
    year: 2021,
    method: "Field monitoring + 3D FEM (Plaxis 3D)",
    keyParameters: "φ=32°, c=0 kPa, γ=18 kN/m³, pile dia. 600–900 mm, H=15 m, δ_max=22 mm (secant) / 31 mm (tangent)",
    categories: ["secant-pile", "tangent-pile", "urban"],
    abstract: "Instrumented field measurements at a 15 m deep urban excavation in London Terrace Gravel compared secant and tangent pile wall performance under identical ground conditions. Inclinometers, settlement markers, and vibrating-wire strain gauges monitored throughout 5 construction stages. Secant piles showed 28% lower lateral deflection and effectively controlled groundwater inflow below 2 L/min per 10 m compared to 12 L/min for tangent piles with unsealed joints.",
    conclusion: "Secant pile walls outperform tangent configurations in granular soils below the water table, achieving a 28% reduction in lateral movement and near-zero groundwater seepage. The additional cost premium of 15–20% for secant construction is economically justified for excavations deeper than 12 m in urban environments where settlement-sensitive structures exist within 2H.",
    doiLink: "https://doi.org/10.1680/jgeen.20.00084"
  },
  {
    id: "p003",
    title: "Sheet Pile Wall Design Optimization Using Rankine and Coulomb Earth Pressure Theories",
    authors: "Choudhury, D.; Chatterjee, S.; Poulos, H.G.",
    year: 2020,
    method: "Limit equilibrium + parametric study",
    keyParameters: "Ka=0.307 (Coulomb), Kp=3.25, H=10 m, δ=2φ/3, embedment D=6.2 m",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract: "Parametric evaluation of classical earth pressure theories applied to cantilevered sheet pile walls in dense sand (φ=32°, γ=19 kN/m³). Both Rankine and Coulomb theories were applied for free and fixed earth support conditions across wall heights of 6–14 m and friction angles of 25°–40°. Coulomb theory with wall friction δ=2φ/3 reduces required embedment depth by 18–22% compared to Rankine and yields maximum bending moment 12% lower, significantly influencing steel section selection.",
    conclusion: "Coulomb earth pressure theory with appropriate wall friction (δ=2φ/3) provides more accurate and economical sheet pile designs than Rankine, reducing steel section weight by 8–15% for typical highway retaining applications. Engineers should use Fixed Earth Support method for anchored walls in dense sand to avoid over-conservative embedment depths.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002791"
  },
  {
    id: "p004",
    title: "Diaphragm Wall Behavior in Multi-Propped Deep Excavations: Case Study Marina Bay, Singapore",
    authors: "Leung, C.F.; Ng, C.W.W.; Wang, Z.W.; Goh, A.T.C.",
    year: 2020,
    method: "Back-analysis + observational method + Plaxis 2D HS model",
    keyParameters: "E_wall=28 GPa, t=800 mm, H=32 m, props at 3 m spacing, δ_max=70 mm (0.22% H)",
    categories: ["diaphragm-wall", "deep-excavation", "case-study"],
    abstract: "A comprehensive back-analysis of 800 mm thick diaphragm wall performance during a 32 m excavation in Singapore marine clay (MC) with undrained shear strength cu=20–60 kPa. Instrumentation included 18 inclinometers, 45 settlement pins, 12 piezometers, and 6 strut load cells monitored through 8 construction stages. Wall deflections peaked at 70 mm (0.22% H) at stage 6. Heave factor of safety maintained above 1.5 through pre-consolidation vacuum grouting beneath the slab.",
    conclusion: "In Singapore marine clay with cu/p'v0 = 0.22, a 32 m diaphragm wall propped at 3 m vertical intervals achieves δ_max/H = 0.22%, consistent with the Clough and O'Rourke (1990) performance database. Pre-consolidation grouting raised the basal stability factor by 0.3 and reduced maximum wall movement by 18%, demonstrating its effectiveness for deep excavations in normally consolidated clay.",
    doiLink: "https://doi.org/10.1680/geot.2019.69.11.975"
  },
  {
    id: "p005",
    title: "Micropile Retaining Systems Under Lateral Loading: Experimental and Analytical Study",
    authors: "Juran, I.; Bruce, D.A.; Dimillio, A.; Benslimane, A.",
    year: 2022,
    method: "Full-scale load testing + p-y curve analysis (LPILE)",
    keyParameters: "dia.=150 mm, L=15 m, grout fcu=35 MPa, n=4/m, Pu_lateral=280 kN/pile",
    categories: ["micropile", "lateral-load", "experimental"],
    abstract: "Lateral load response of micropile walls was evaluated through full-scale field tests on 12 instrumented 150 mm diameter micropiles in dense sand (φ=38°, Dr=75%). Loads applied in 25 kN increments to failure. Composite action between micropiles and the soil matrix provided 40% higher lateral resistance than predicted by individual pile analysis at service loads. p-y curves were calibrated against strain gauge profiles and back-calculated subgrade modulus, yielding nh = 18 MN/m³.",
    conclusion: "Micropile walls in dense sand develop significant composite resistance through group interaction, exceeding single-pile predictions by 40% at service load levels. The modified Broms method with a composite stiffness factor of 1.35 accurately captures this behavior, and Type C/D pressure-grouted micropiles achieve 25% higher lateral capacity than Type A gravity-injected piles under identical geometry.",
    doiLink: "https://doi.org/10.1139/cgj-2020-0441"
  },
  {
    id: "p006",
    title: "Effect of Soil Heterogeneity on Passive Earth Pressure: Monte Carlo Analysis",
    authors: "Phoon, K.K.; Kulhawy, F.H.; Grigoriu, M.D.",
    year: 2019,
    method: "Probabilistic – Monte Carlo simulation (10,000 realizations, random field)",
    keyParameters: "φ: N(32°,5°), c: N(15,8) kPa, COV=0.30, correlation length θ_v=2 m",
    categories: ["earth-pressure", "probabilistic", "soil-variability"],
    abstract: "Spatial variability of internal friction angle φ and cohesion c is propagated through passive earth pressure calculations using a 2D random field Monte Carlo framework with 10,000 realizations. Gaussian auto-correlation with vertical correlation length θ_v = 2 m and horizontal θ_h = 10 m was employed to model glacial till heterogeneity. Results show Kp coefficient of variation of 0.28 for heterogeneous conditions, with the mean Kp 8% lower than deterministic Kp, significantly increasing required embedment depth to achieve reliability index β = 3.0.",
    conclusion: "Spatial variability in cohesion and friction angle reduces effective passive resistance by 8–15% relative to deterministic estimates, requiring a minimum additional 0.5 m embedment depth to maintain β = 3.0 reliability for typical retaining wall applications. The classical deterministic approach with a single factor of safety of 1.5 achieves only β = 2.1 in heterogeneous glacial till, highlighting the inadequacy of deterministic methods for variable ground conditions.",
    doiLink: "https://doi.org/10.1002/nag.3228"
  },
  {
    id: "p007",
    title: "Seismic Performance of Diaphragm Walls in Liquefiable Sand: Centrifuge and Numerical Study",
    authors: "Elgamal, A.; Yang, Z.; Parra, E.; Ragheb, A.",
    year: 2023,
    method: "Centrifuge testing + OpenSees nonlinear FEM",
    keyParameters: "H=18 m, t=600 mm, PGA=0.3g, Dr=45% (liquefiable), Δu/σ'v0=0.95",
    categories: ["diaphragm-wall", "fem", "case-study"],
    abstract: "Seismic response of 600 mm diaphragm walls retaining liquefiable loose sand (Dr=45%) was investigated using 1-g centrifuge models at 1:50 scale and parallel OpenSees simulations with the PM4Sand constitutive model. Four earthquake records (0.1–0.4g PGA) were applied. Near-complete liquefaction (Δu/σ'v0=0.95) was triggered at PGA=0.3g, causing permanent wall deflection of 85 mm and residual lateral displacement of the retained soil mass of 120 mm.",
    conclusion: "Diaphragm walls in liquefiable sand experience post-earthquake residual deflections 3–5 times larger than peak dynamic displacements, driven by pore pressure redistribution during reconsolidation. Ground improvement of retained sand to Dr ≥ 65% or installation of relief drains reduces permanent seismic deflection by 60%, and is strongly recommended for permanent diaphragm walls in seismic zones with liquefiable deposits.",
    doiLink: "https://doi.org/10.1061/JGGEFK.GTENG-10785"
  },
  {
    id: "p008",
    title: "Comparative Life-Cycle Cost Analysis of Excavation Support Systems for Urban Basement Construction",
    authors: "Mana, A.I.; Clough, G.W.; Finno, R.J.; Blackburn, J.T.",
    year: 2022,
    method: "Cost-benefit analysis + LCA (50-year service life)",
    keyParameters: "H=12–20 m, LCC_diaphragm=$1450/m², LCC_secant=$780/m², LCC_sheet=$420/m²",
    categories: [
      "diaphragm-wall",
      "secant-pile",
      "sheet-pile",
      "deep-excavation"
    ],
    abstract: "A life-cycle cost (LCC) analysis compared soldier pile, sheet pile, secant pile, tangent pile, micropile, and diaphragm wall systems for urban basement excavations 12–20 m deep. Direct costs (materials, equipment, labor), indirect costs (traffic delay, noise), and long-term maintenance were quantified over a 50-year service period using Monte Carlo simulation for cost uncertainty. Diaphragm walls showed highest initial cost ($1450/m²) but lowest total LCC for permanent basement walls due to combined retaining-foundation function.",
    conclusion: "For permanent urban basements deeper than 15 m, diaphragm walls offer the lowest 50-year life-cycle cost ($1450/m²) despite the highest initial investment, due to elimination of separate foundation costs. For temporary excavation support in stiff soils, soldier pile walls remain most economical at $220–350/m², while sheet pile walls are optimal for waterfront applications where water cutoff is required at moderate depth (8–12 m).",
    doiLink: "https://doi.org/10.1016/j.tust.2022.104567"
  },
  {
    id: "p009",
    title: "Ground Settlement Prediction Adjacent to Braced Excavations in Soft Clay: Neural Network Approach",
    authors: "Kung, G.T.C.; Juang, C.H.; Hsiao, E.C.L.; Hashash, Y.M.A.",
    year: 2023,
    method: "ANN trained on 172 field cases + FEM validation",
    keyParameters: "δ_h_max=25–95 mm, δ_v_max=18–75 mm, H=8–22 m, cu/p'v0=0.15–0.40",
    categories: ["soft-clay", "fem", "deep-excavation"],
    abstract: "An artificial neural network (ANN) model was developed to predict maximum ground surface settlement adjacent to braced excavations in soft to medium clay. Training data comprised 172 documented case histories in Taiwan, Singapore, and Chicago with excavation depths 8–22 m and undrained shear strength ratio cu/p'v0 = 0.15–0.40. The model incorporates wall stiffness ratio (EI/γw·h⁴), support spacing, and construction sequence as input variables, achieving R²=0.91 on the validation set versus R²=0.73 for the Clough-O'Rourke chart.",
    conclusion: "The ANN model predicts maximum ground settlement with R²=0.91, substantially outperforming the Clough and O'Rourke (1990) design chart (R²=0.73) for soft clay excavations. Wall stiffness ratio EI/γw·h⁴ and system stiffness S = EI/(γw·h⁴avg) are the dominant predictors; increasing S from 50 to 200 reduces predicted δ_v_max/H from 1.2% to 0.35% in soft clay with stability number Nb = 4.5.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002987"
  },
  {
    id: "p010",
    title: "Anchor Force Distribution in Tied-Back Sheet Pile Walls: Field Measurements and Design Implications",
    authors: "Sabatini, P.J.; Pass, D.G.; Bachus, R.C.; Brown, D.A.",
    year: 2019,
    method: "Field instrumentation (load cells, inclinometers) + limit equilibrium",
    keyParameters: "T_anchor=320–580 kN, H=9 m, s=2.5 m, inclination=15°, AZ18 sheet piles",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract: "Field measurements of anchor loads in a tied-back AZ18 sheet pile wall supporting a 9 m excavation in medium-dense sand were compared with free earth support and Rowe's moment reduction design methods. Load cells on 24 anchors and 6 inclinometers recorded data through seasonal groundwater fluctuations. Measured anchor forces were 25–40% lower than free earth support predictions due to wall flexibility and arching, but 15% higher than Rowe's method predictions during peak winter water table conditions.",
    conclusion: "Rowe's moment reduction method provides non-conservative anchor force estimates when seasonal groundwater fluctuations raise the water table by more than 1.5 m. A correction factor of 1.15 applied to Rowe's predicted anchor force, combined with free earth support embedment depth, ensures adequate safety for tied-back sheet pile walls subject to variable groundwater conditions in seasonal climates.",
    doiLink: "https://doi.org/10.1061/JGGEFK.0000256"
  },
  {
    id: "p011",
    title: "Tangent Pile Wall Performance in Residual Laterite Soils: Case Study Kuala Lumpur",
    authors: "Tan, Y.C.; Chow, C.M.; Gue, S.S.; Yii, P.J.",
    year: 2020,
    method: "Field monitoring + WALLAP analysis",
    keyParameters: "φ=35°, c=15 kPa, E=60 MPa, pile dia.=750 mm, H=14 m, δ_max=18 mm",
    categories: ["tangent-pile", "case-study", "fem"],
    abstract: "Performance of a 750 mm diameter tangent pile wall supporting a 14 m deep basement excavation in Kuala Lumpur residual granite laterite was monitored through 6 construction stages. Laterite parameters were c'=15 kPa, φ'=35°, E=60 MPa (measured by PMT). WALLAP sub-grade reaction analysis was calibrated against inclinometer data. Maximum lateral displacement was 18 mm (0.13% H), significantly below the serviceability limit of H/500=28 mm. Ground surface settlements were limited to 12 mm within the influence zone of 1.5H.",
    conclusion: "Tangent pile walls in residual laterite soils with c'≥15 kPa achieve excellent performance (δ_max < 0.15% H) due to the high apparent cohesion and angle of friction in weathered granite profiles. The sub-grade reaction approach using Ks = 60–120 MN/m³ calibrated from PMT results provides adequate accuracy for routine design, while FEM is recommended for complex multi-level propped systems in highly variable profiles.",
    doiLink: "https://doi.org/10.1680/jgein.2020.00031"
  },
  {
    id: "p012",
    title: "Structural Integrity of Secant Pile Walls: Impact of Construction Tolerances on Overlap and Water Tightness",
    authors: "De Cock, F.; Legrand, C.; Huybrechts, N.; Van Lysebetten, G.",
    year: 2021,
    method: "Statistical analysis of 850 installed piles + groundwater monitoring",
    keyParameters: "dia.=900 mm, design overlap=50 mm, measured overlap=10–80 mm, verticality σ=0.3%",
    categories: ["secant-pile", "design", "urban"],
    abstract: "Statistical analysis of pile position data from 850 secant piles at 12 sites in Belgium and the Netherlands quantified the relationship between installation tolerances, achieved overlap, and groundwater performance. Pile verticality standard deviation of 0.3% resulted in overlap loss averaging 18 mm per 10 m depth, with 8% of piles showing zero overlap below 25 m. Grouting of deficient joints reduced average seepage from 45 L/hr to 3 L/hr per 10 m wall length.",
    conclusion: "Secant pile wall water tightness is critically dependent on achieving minimum 20 mm overlap at full pile depth. For walls exceeding 20 m, verticality tolerance must be ≤0.25% (tighter than the typical ≤0.5% specification) to maintain overlap reliability above 95%. Post-installation testing with packer permeability tests and joint grouting protocol should be mandatory for below-water basement applications.",
    doiLink: "https://doi.org/10.1007/978-3-319-97112-4_82"
  },
  {
    id: "p013",
    title: "Load Transfer Mechanisms in High-Capacity Micropiles Under Combined Axial and Lateral Loading",
    authors: "Shahrour, I.; Juran, I.; Morbois, A.; Taha, M.R.",
    year: 2022,
    method: "3D FEM (Abaqus) + full-scale pile load test",
    keyParameters: "dia.=178 mm, L=18 m, qa_axial=850 kN, H_lateral=120 kN, qs=1.8 MPa (rock socket)",
    categories: ["micropile", "lateral-load", "design"],
    abstract: "Three-dimensional finite element analyses and full-scale load tests were conducted on 178 mm diameter Type D micropiles in weathered granite. The combined loading interaction diagram was developed for axial compression (100–1200 kN) combined with lateral load (0–200 kN). Results revealed that lateral loads exceeding 15% of axial capacity reduce axial bond strength by 12–18% through bending-induced slip at the grout-rock interface, requiring interaction check in retaining wall design.",
    conclusion: "High-capacity micropiles in rock socket conditions exhibit significant axial-lateral interaction when horizontal load exceeds 15% of axial design capacity. The interaction factor α_int = 1 − 0.85(H/V)^1.2 accurately quantifies this reduction and should be incorporated into design calculations. Type D double-injection micropiles provide 35% higher resistance to combined loading compared to Type A piles through superior grout-ground interface strength.",
    doiLink: "https://doi.org/10.1002/nag.3415"
  },
  {
    id: "p014",
    title: "Real-Time Monitoring and Early Warning System for Diaphragm Wall Excavation in Sensitive Urban Areas",
    authors: "Peck, R.B.; Schweiger, H.F.; Soga, K.; Mair, R.J.",
    year: 2023,
    method: "Observational method + IoT sensor network + Bayesian updating",
    keyParameters: "H=25 m, 42 inclinometers, 120 settlement points, alert threshold δ=0.15% H=37.5 mm",
    categories: ["diaphragm-wall", "case-study", "urban"],
    abstract: "A real-time structural health monitoring system integrating 42 in-place inclinometers, 120 settlement markers, and 18 piezometers with IoT data transmission was deployed on a 25 m deep diaphragm wall excavation in central London adjacent to a Grade I listed building. Bayesian updating was applied to recalibrate Plaxis FEM predictions as construction progressed. The system detected an anomalous acceleration in wall movement at stage 4 (18 m depth) with 72-hour advance warning, enabling additional propping before alert threshold (0.15% H) was reached.",
    conclusion: "IoT-enabled monitoring with Bayesian updating of FEM predictions provides early warning 48–96 hours before alert thresholds are reached, enabling proactive intervention that prevented exceeding the 37.5 mm alert level in two construction stages. Implementation of continuous automated monitoring reduces structural risk by an estimated factor of 3 compared to periodic manual readings, with total monitoring cost representing only 1.2% of excavation contract value.",
    doiLink: "https://doi.org/10.1680/jgeot.22.00109"
  },
  {
    id: "p015",
    title: "Arching Mechanism and Soil Pressure Distribution Between Soldier Piles with Varying Spacing",
    authors: "Liang, F.; Song, Z.; Tian, Y.; Chen, L.",
    year: 2022,
    method: "Centrifuge testing (1:40 scale) + DEM simulation",
    keyParameters: "s/d=2.0–5.0 (pile spacing/diameter), φ=34°, γ=17 kN/m³, d=300 mm equivalent",
    categories: ["soldier-pile", "earth-pressure", "experimental"],
    abstract: "Soil arching between soldier piles was investigated using centrifuge tests at 40g with equivalent pile diameters of 300 mm and spacings from 0.6 to 1.5 m (s/d = 2.0–5.0). Discrete element modelling (DEM) simulated particle-scale force chains. Arching ratio (ratio of actual to Rankine active thrust) ranged from 0.45 at s/d=2.0 to 0.92 at s/d=4.5, with critical failure at s/d=5.0 where complete arch collapse occurred and soil ran between piles.",
    conclusion: "Soil arching between soldier piles maintains effectiveness only for s/d ≤ 4.0 in dense to medium-dense sand (Dr > 50%), with an arching efficiency factor of 0.5–0.8 applicable to lateral pressure reduction. Below Dr = 40% or in cohesionless fill, arching cannot be relied upon and individual pile pressure using full Rankine active thrust should be used for lagging and pile design.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2022.104891"
  },
  {
    id: "p016",
    title: "Groundwater Drawdown Effects on Adjacent Buildings During Diaphragm Wall Installation",
    authors: "Bjerrum, L.; Clausen, C.J.; Duncan, J.M.; Lacasse, S.",
    year: 2019,
    method: "SEEP/W numerical analysis + settlement monitoring",
    keyParameters: "k=5×10⁻⁵ m/s (sand), H_drawdown=8 m, δ_settle=22 mm, distance from wall=15 m",
    categories: ["diaphragm-wall", "urban", "case-study"],
    abstract: "Groundwater drawdown induced by diaphragm wall panel excavation in a confined aquifer (k=5×10⁻⁵ m/s, head=22 m) was simulated using SEEP/W transient analysis and verified against 36 piezometers during panel installation at 8 m below groundwater level. Drawdown of 8 m was observed at 5 m distance from the trench within 6 hours of panel excavation without bentonite slurry. Adjacent masonry buildings on shallow foundations settled 22 mm, triggering Level 2 alert (15 mm threshold).",
    conclusion: "Groundwater drawdown during diaphragm wall panel excavation in sands with k > 10⁻⁴ m/s can cause significant immediate settlement (>20 mm) within 10 m of the trench if bentonite slurry density is not maintained above 1.08 g/cm³. Continuous slurry density monitoring and real-time piezometer alerts, combined with immediate grouting protocols, are essential risk mitigation measures for diaphragm wall construction in confined aquifer conditions.",
    doiLink: "https://doi.org/10.1680/jgeen.17.00156"
  },
  {
    id: "p017",
    title: "Finite Element Analysis of Sheet Pile Walls in Layered Soil: Effect of Soil Stratification on Deflection",
    authors: "Potts, D.M.; Fourie, A.B.; Zdravkovic, L.; Kovacevic, N.",
    year: 2020,
    method: "2D FEM (ICFEP) – Mohr-Coulomb + Cam-clay",
    keyParameters: "H=12 m, layered: clay(c=25 kPa)/sand(φ=33°)/gravel(φ=40°), δ_max=38 mm",
    categories: ["sheet-pile", "fem", "earth-pressure"],
    abstract: "Finite element analysis of cantilever and propped sheet pile walls in two- and three-layer soil profiles was performed using the Imperial College Finite Element Program (ICFEP). Soil layers included: soft clay (c=25 kPa, E=8 MPa), medium sand (φ=33°, E=35 MPa), and dense gravel (φ=40°, E=80 MPa). The clay layer position (at surface, mid-depth, or at embedment) significantly affects wall deflection, with clay at mid-depth causing 45% higher maximum bending moment compared to uniform sand profile.",
    conclusion: "Soil stratification critically influences sheet pile wall performance; a soft clay layer at mid-excavation depth generates bending moments 45% higher than equivalent uniform granular profiles. Designers must account for layer position and the corresponding earth pressure redistribution, and single-layer assumptions based on average parameters can be non-conservative by up to 40% for walls penetrating soft clay overlying dense sand.",
    doiLink: "https://doi.org/10.1680/jgeot.19.P.312"
  },
  {
    id: "p018",
    title: "Carbon Footprint Comparison of Deep Excavation Support Systems in Urban Construction",
    authors: "Ramírez, J.L.; Kontoe, S.; Addenbrooke, T.I.; Potts, D.M.",
    year: 2023,
    method: "Life cycle assessment (LCA) – ISO 14040 framework",
    keyParameters: "GWP_diaphragm=285 kgCO₂/m², GWP_secant=198 kgCO₂/m², GWP_sheet=112 kgCO₂/m²",
    categories: ["diaphragm-wall", "secant-pile", "sheet-pile", "design"],
    abstract: "Life cycle assessment (LCA) following ISO 14040 was conducted for six excavation support systems at equivalent 15 m retained height. Embodied carbon, construction energy, and end-of-life credits were quantified. Diaphragm walls had the highest global warming potential (GWP = 285 kgCO₂e/m²) due to concrete volume, while steel sheet piles offered the lowest GWP (112 kgCO₂e/m²) when reuse credit was applied. Micropiles showed high GWP/m of wall due to high cement grout volume with low structural area.",
    conclusion: "Steel sheet pile walls with planned reuse offer the lowest embodied carbon (112 kgCO₂e/m²) among excavation systems at 15 m retained height, achieving 61% lower GWP than diaphragm walls. Structural optimization of diaphragm wall concrete mix using low-carbon CEM III/B cement reduces GWP by 35%, making it competitive with secant pile systems and supporting sustainability targets for urban infrastructure projects.",
    doiLink: "https://doi.org/10.1016/j.jclepro.2023.136784"
  }
];
export {
  ALL_METRIC_IDS as A,
  COMPARISON_METRICS as C,
  GRAPH_DATA as G,
  INPUT_PARAM_OPTIONS as I,
  METRIC_ROWS as M,
  OUTPUT_PARAM_OPTIONS as O,
  RESEARCH_PAPERS as R,
  SYSTEMS as S,
  INPUT_EFFECT_ROWS as a,
  OUTPUT_RANGE_ROWS as b,
  createActor as c
};
