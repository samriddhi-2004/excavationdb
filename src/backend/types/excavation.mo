module {
  public type WallType = {
    #SoldierPile;
    #SecantPile;
    #SheetPile;
    #TangentPile;
    #Micropile;
    #DiaphragmWall;
  };

  public type ExcavationSystem = {
    id : Text;
    name : Text;
    wallType : WallType;
    description : Text;
  };

  public type SoilParameters = {
    frictionAngle : Float;
    cohesion : Float;
    unitWeight : Float;
    elasticModulus : Float;
    poissonRatio : Float;
  };

  public type EarthPressure = {
    kaActive : Float;
    kpPassive : Float;
    k0AtRest : Float;
    activeForce : Float;
    passiveForce : Float;
    formula : Text;
  };

  public type SystemDetail = {
    systemId : Text;
    tabName : Text;
    content : Text;
  };

  public type ComparisonMetric = {
    systemId : Text;
    costRange : Text;
    maxHeight : Float;
    installationTime : Text;
    deflection : Text;
    waterControl : Text;
    noisyVibration : Text;
    mobilizationTime : Text;
  };

  public type ResearchPaper = {
    id : Text;
    title : Text;
    method : Text;
    keyParameters : Text;
    categories : [Text];
    abstract_ : Text;
    doiLink : Text;
  };
};
