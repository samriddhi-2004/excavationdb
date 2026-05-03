import List "mo:core/List";
import Types "types/excavation";
import ExcavationLib "lib/excavation";
import ExcavationApi "mixins/excavation-api";

actor {
  let systems = List.empty<Types.ExcavationSystem>();
  let details = List.empty<Types.SystemDetail>();
  let metrics = List.empty<Types.ComparisonMetric>();
  let papers = List.empty<Types.ResearchPaper>();

  ExcavationLib.seedSystems(systems, details, metrics, papers);

  include ExcavationApi(systems, details, metrics, papers);
};
