import ExcavationLib "../lib/excavation";
import Types "../types/excavation";
import List "mo:core/List";

mixin (
  systems : List.List<Types.ExcavationSystem>,
  details : List.List<Types.SystemDetail>,
  metrics : List.List<Types.ComparisonMetric>,
  papers : List.List<Types.ResearchPaper>,
) {
  public query func getSystems() : async [Types.ExcavationSystem] {
    ExcavationLib.getSystems(systems);
  };

  public query func getSystemDetail(systemId : Text, tab : Text) : async ?Types.SystemDetail {
    ExcavationLib.getSystemDetail(details, systemId, tab);
  };

  public query func getAllMetrics() : async [Types.ComparisonMetric] {
    ExcavationLib.getAllMetrics(metrics);
  };

  public query func getPapers() : async [Types.ResearchPaper] {
    ExcavationLib.getPapers(papers);
  };

  public query func getPapersByCategory(category : Text) : async [Types.ResearchPaper] {
    ExcavationLib.getPapersByCategory(papers, category);
  };
};
