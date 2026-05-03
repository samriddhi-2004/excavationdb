import { T as ProtocolError, U as TimeoutWaitingForResponseErrorCode, V as utf8ToBytes, W as ExternalError, X as MissingRootKeyErrorCode, Y as Certificate, Z as lookupResultToBuffer, _ as RequestStatusResponseStatus, $ as UnknownError, a0 as RequestStatusDoneNoReplyErrorCode, a1 as RejectError, a2 as CertifiedRejectErrorCode, a3 as UNREACHABLE_ERROR, a4 as InputError, a5 as InvalidReadStateRequestErrorCode, a6 as ReadRequestType, a7 as Principal, a8 as IDL, a9 as MissingCanisterIdErrorCode, aa as HttpAgent, ab as encode, ac as QueryResponseStatus, ad as UncertifiedRejectErrorCode, ae as isV3ResponseBody, af as isV2ResponseBody, ag as UncertifiedRejectUpdateErrorCode, ah as UnexpectedErrorCode, ai as decode, aj as Record, ak as Vec, al as Variant, am as Service, an as Func, ao as Opt, ap as Text, aq as Float64, ar as Null } from "./index-BUl89JH6.js";
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
    method: "Finite Element Method (FEM) – Plaxis 2D",
    keyParameters: "φ=28°, c=10 kPa, E=15 MPa, pile spacing 2.5 m",
    categories: ["soldier-pile", "fem", "soft-clay"],
    abstract: "This study presents FEM-based deformation analysis of soldier pile retaining walls in soft clay deposits. Results show maximum lateral displacement of 42 mm at 8 m excavation depth, with surcharge loading increasing displacements by 35%.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2021.104123"
  },
  {
    id: "p002",
    title: "Performance Comparison of Secant vs. Tangent Pile Walls in Urban Excavation",
    method: "Field monitoring + 3D FEM",
    keyParameters: "φ=32°, c=0 kPa, γ=18 kN/m³, pile dia. 600–900 mm",
    categories: ["secant-pile", "tangent-pile", "urban"],
    abstract: "Instrumented field measurements at a 15 m deep urban excavation compared secant and tangent pile wall performance. Secant piles showed 28% lower lateral deflection and effectively controlled groundwater inflow below 2 L/min per 10 m.",
    doiLink: "https://doi.org/10.1680/jgeen.20.00084"
  },
  {
    id: "p003",
    title: "Sheet Pile Wall Design Optimization Using Rankine and Coulomb Earth Pressure Theories",
    method: "Limit equilibrium + parametric study",
    keyParameters: "Ka=0.307, Kp=3.25, H=10 m, δ=2φ/3",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract: "Parametric evaluation of classical earth pressure theories applied to cantilevered sheet pile walls. Coulomb theory with wall friction δ=2φ/3 reduces required embedment depth by 18–22% compared to Rankine. Critical for optimizing section modulus.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002791"
  },
  {
    id: "p004",
    title: "Diaphragm Wall Behavior in Multi-Propped Deep Excavations: Case Study Singapore",
    method: "Back-analysis + observational method",
    keyParameters: "E=800 MPa, t=800 mm, H=32 m, props at 3 m spacing",
    categories: ["diaphragm-wall", "deep-excavation", "case-study"],
    abstract: "A comprehensive back-analysis of 800 mm diaphragm wall performance during a 32 m excavation in Singapore marine clay. Wall deflections peaked at 0.22% H. Heave factor of safety maintained above 1.5 through pre-consolidation grouting.",
    doiLink: "https://doi.org/10.1680/geot.2019.69.11.975"
  },
  {
    id: "p005",
    title: "Micropile Retaining Systems Under Lateral Loading: Experimental and Analytical Study",
    method: "Full-scale load testing + p-y curve analysis",
    keyParameters: "dia. 150 mm, L=15 m, grout fcu=30 MPa, n=4/m",
    categories: ["micropile", "lateral-load", "experimental"],
    abstract: "Lateral load response of micropile walls was evaluated through full-scale tests. Composite action between micropiles and the soil matrix provided 40% higher lateral resistance than predicted by individual pile analysis. p-y curves calibrated for dense sand.",
    doiLink: "https://doi.org/10.1139/cgj-2020-0441"
  },
  {
    id: "p006",
    title: "Effect of Soil Heterogeneity on Passive Earth Pressure: Monte Carlo Analysis",
    method: "Probabilistic – Monte Carlo simulation (10,000 runs)",
    keyParameters: "φ: N(32°,5°), c: N(15,8) kPa, COV=0.3",
    categories: ["earth-pressure", "probabilistic", "soil-variability"],
    abstract: "Spatial variability of φ and c is propagated through passive earth pressure calculations using Monte Carlo analysis. Results show Kp coefficient of variation of 0.28 for heterogeneous glacial till, increasing required embedment for reliability index β=3.0.",
    doiLink: "https://doi.org/10.1002/nag.3228"
  }
];
export {
  COMPARISON_METRICS as C,
  RESEARCH_PAPERS as R,
  SYSTEMS as S,
  createActor as c
};
