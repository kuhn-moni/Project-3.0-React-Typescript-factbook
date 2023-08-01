export interface ChatMsg {
  author: string;
  date: number;
  text: string;
}

export interface ChatMsgWithId extends ChatMsg {
  id: string;
}
export interface CountryResponse {
  Introduction: Introduction;
  Geography: Geography;
  "People and Society": PeopleAndSociety;
  Government: Government;
  Economy: Economy;
  Communications: Communications;
  "Military and Security": MilitaryAndSecurity;
  "Transnational Issues": TransnationalIssues;
}

export interface Introduction {
  Background: Background;
  Img?: string; //!for embedding flag images into countries
}

export interface Background {
  text: string;
}

export interface Geography {
  Location: Location;
  "Geographic coordinates": GeographicCoordinates;
  "Map references": MapReferences;
  Area: Area;
  "Area - comparative": AreaComparative;
  "Land boundaries": LandBoundaries;
  Coastline: Coastline;
  "Maritime claims": MaritimeClaims;
  Climate: Climate;
  Terrain: Terrain;
  Elevation: Elevation;
  "Natural resources": NaturalResources;
  "Land use": LandUse;
  "Irrigated land": IrrigatedLand;
  "Major lakes (area sq km)": MajorLakesAreaSqKm;
  "Population distribution": PopulationDistribution;
  "Natural hazards": NaturalHazards;
  "Geography - note": GeographyNote;
}

export interface Location {
  text: string;
}

export interface GeographicCoordinates {
  text: string;
}

export interface MapReferences {
  text: string;
}

export interface Area {
  total: Total;
  land: Land;
  water: Water;
  note: string;
}

export interface Total {
  text: string;
}

export interface Land {
  text: string;
}

export interface Water {
  text: string;
}

export interface AreaComparative {
  text: string;
}

export interface LandBoundaries {
  total: Total2;
}

export interface Total2 {
  text: string;
}

export interface Coastline {
  text: string;
}

export interface MaritimeClaims {
  "territorial sea": TerritorialSea;
  "contiguous zone": ContiguousZone;
  "exclusive economic zone": ExclusiveEconomicZone;
}

export interface TerritorialSea {
  text: string;
}

export interface ContiguousZone {
  text: string;
}

export interface ExclusiveEconomicZone {
  text: string;
}

export interface Climate {
  text: string;
}

export interface Terrain {
  text: string;
}

export interface Elevation {
  "highest point": HighestPoint;
  "lowest point": LowestPoint;
  "mean elevation": MeanElevation;
}

export interface HighestPoint {
  text: string;
}

export interface LowestPoint {
  text: string;
}

export interface MeanElevation {
  text: string;
}

export interface NaturalResources {
  text: string;
}

export interface LandUse {
  "agricultural land": AgriculturalLand;
  "agricultural land: arable land": AgriculturalLandArableLand;
  "agricultural land: permanent crops": AgriculturalLandPermanentCrops;
  "agricultural land: permanent pasture": AgriculturalLandPermanentPasture;
  forest: Forest;
  other: Other;
}

export interface AgriculturalLand {
  text: string;
}

export interface AgriculturalLandArableLand {
  text: string;
}

export interface AgriculturalLandPermanentCrops {
  text: string;
}

export interface AgriculturalLandPermanentPasture {
  text: string;
}

export interface Forest {
  text: string;
}

export interface Other {
  text: string;
}

export interface IrrigatedLand {
  text: string;
}

export interface MajorLakesAreaSqKm {
  "fresh water lake(s)": FreshWaterLakeS;
}

export interface FreshWaterLakeS {
  text: string;
}

export interface PopulationDistribution {
  text: string;
}

export interface NaturalHazards {
  text: string;
}

export interface GeographyNote {
  text: string;
}

export interface PeopleAndSociety {
  Population: Population;
  Nationality: Nationality;
  "Ethnic groups": EthnicGroups;
  Languages: Languages;
  Religions: Religions;
  "Age structure": AgeStructure;
  "Dependency ratios": DependencyRatios;
  "Median age": MedianAge;
  "Population growth rate": PopulationGrowthRate;
  "Birth rate": BirthRate;
  "Death rate": DeathRate;
  "Net migration rate": NetMigrationRate;
  "Population distribution": PopulationDistribution2;
  Urbanization: Urbanization;
  "Major urban areas - population": MajorUrbanAreasPopulation;
  "Sex ratio": SexRatio;
  "Mother's mean age at first birth": MotherSMeanAgeAtFirstBirth;
  "Maternal mortality ratio": MaternalMortalityRatio;
  "Infant mortality rate": InfantMortalityRate;
  "Life expectancy at birth": LifeExpectancyAtBirth;
  "Total fertility rate": TotalFertilityRate;
  "Gross reproduction rate": GrossReproductionRate;
  "Contraceptive prevalence rate": ContraceptivePrevalenceRate;
  "Drinking water source": DrinkingWaterSource;
  "Current health expenditure": CurrentHealthExpenditure;
  "Physicians density": PhysiciansDensity;
  "Hospital bed density": HospitalBedDensity;
  "Sanitation facility access": SanitationFacilityAccess;
  "Obesity - adult prevalence rate": ObesityAdultPrevalenceRate;
  "Alcohol consumption per capita": AlcoholConsumptionPerCapita;
  "Tobacco use": TobaccoUse;
  "Children under the age of 5 years underweight": ChildrenUnderTheAgeOf5YearsUnderweight;
  "Currently married women (ages 15-49)": CurrentlyMarriedWomenAges1549;
  "Education expenditures": EducationExpenditures;
  Literacy: Literacy;
  "School life expectancy (primary to tertiary education)": SchoolLifeExpectancyPrimaryToTertiaryEducation;
  "Youth unemployment rate (ages 15-24)": YouthUnemploymentRateAges1524;
}

export interface Population {
  text: string;
}

export interface Nationality {
  noun: Noun;
  adjective: Adjective;
}

export interface Noun {
  text: string;
}

export interface Adjective {
  text: string;
}

export interface EthnicGroups {
  text: string;
  note: string;
}

export interface Languages {
  Languages: Languages2;
  "major-language sample(s)": MajorLanguageSampleS;
}

export interface Languages2 {
  text: string;
}

export interface MajorLanguageSampleS {
  text: string;
}

export interface Religions {
  text: string;
  note: string;
}

export interface AgeStructure {
  "0-14 years": N014Years;
  "15-64 years": N1564Years;
  "65 years and over": N65YearsAndOver;
}

export interface N014Years {
  text: string;
}

export interface N1564Years {
  text: string;
}

export interface N65YearsAndOver {
  text: string;
}

export interface DependencyRatios {
  "total dependency ratio": TotalDependencyRatio;
  "youth dependency ratio": YouthDependencyRatio;
  "elderly dependency ratio": ElderlyDependencyRatio;
  "potential support ratio": PotentialSupportRatio;
}

export interface TotalDependencyRatio {
  text: string;
}

export interface YouthDependencyRatio {
  text: string;
}

export interface ElderlyDependencyRatio {
  text: string;
}

export interface PotentialSupportRatio {
  text: string;
}

export interface MedianAge {
  total: Total3;
  male: Male;
  female: Female;
}

export interface Total3 {
  text: string;
}

export interface Male {
  text: string;
}

export interface Female {
  text: string;
}

export interface PopulationGrowthRate {
  text: string;
}

export interface BirthRate {
  text: string;
}

export interface DeathRate {
  text: string;
}

export interface NetMigrationRate {
  text: string;
}

export interface PopulationDistribution2 {
  text: string;
}

export interface Urbanization {
  "urban population": UrbanPopulation;
  "rate of urbanization": RateOfUrbanization;
}

export interface UrbanPopulation {
  text: string;
}

export interface RateOfUrbanization {
  text: string;
}

export interface MajorUrbanAreasPopulation {
  text: string;
}

export interface SexRatio {
  "at birth": AtBirth;
  "0-14 years": N014Years2;
  "15-64 years": N1564Years2;
  "65 years and over": N65YearsAndOver2;
  "total population": TotalPopulation;
}

export interface AtBirth {
  text: string;
}

export interface N014Years2 {
  text: string;
}

export interface N1564Years2 {
  text: string;
}

export interface N65YearsAndOver2 {
  text: string;
}

export interface TotalPopulation {
  text: string;
}

export interface MotherSMeanAgeAtFirstBirth {
  text: string;
}

export interface MaternalMortalityRatio {
  text: string;
}

export interface InfantMortalityRate {
  total: Total4;
  male: Male2;
  female: Female2;
}

export interface Total4 {
  text: string;
}

export interface Male2 {
  text: string;
}

export interface Female2 {
  text: string;
}

export interface LifeExpectancyAtBirth {
  "total population": TotalPopulation2;
  male: Male3;
  female: Female3;
}

export interface TotalPopulation2 {
  text: string;
}

export interface Male3 {
  text: string;
}

export interface Female3 {
  text: string;
}

export interface TotalFertilityRate {
  text: string;
}

export interface GrossReproductionRate {
  text: string;
}

export interface ContraceptivePrevalenceRate {
  text: string;
  note: string;
}

export interface DrinkingWaterSource {
  "improved: urban": ImprovedUrban;
  "improved: rural": ImprovedRural;
  "improved: total": ImprovedTotal;
  "unimproved: urban": UnimprovedUrban;
  "unimproved: rural": UnimprovedRural;
  "unimproved: total": UnimprovedTotal;
}

export interface ImprovedUrban {
  text: string;
}

export interface ImprovedRural {
  text: string;
}

export interface ImprovedTotal {
  text: string;
}

export interface UnimprovedUrban {
  text: string;
}

export interface UnimprovedRural {
  text: string;
}

export interface UnimprovedTotal {
  text: string;
}

export interface CurrentHealthExpenditure {
  text: string;
}

export interface PhysiciansDensity {
  text: string;
}

export interface HospitalBedDensity {
  text: string;
}

export interface SanitationFacilityAccess {
  "improved: urban": ImprovedUrban2;
  "improved: rural": ImprovedRural2;
  "improved: total": ImprovedTotal2;
  "unimproved: urban": UnimprovedUrban2;
  "unimproved: rural": UnimprovedRural2;
  "unimproved: total": UnimprovedTotal2;
}

export interface ImprovedUrban2 {
  text: string;
}

export interface ImprovedRural2 {
  text: string;
}

export interface ImprovedTotal2 {
  text: string;
}

export interface UnimprovedUrban2 {
  text: string;
}

export interface UnimprovedRural2 {
  text: string;
}

export interface UnimprovedTotal2 {
  text: string;
}

export interface ObesityAdultPrevalenceRate {
  text: string;
}

export interface AlcoholConsumptionPerCapita {
  total: Total5;
  beer: Beer;
  wine: Wine;
  spirits: Spirits;
  "other alcohols": OtherAlcohols;
}

export interface Total5 {
  text: string;
}

export interface Beer {
  text: string;
}

export interface Wine {
  text: string;
}

export interface Spirits {
  text: string;
}

export interface OtherAlcohols {
  text: string;
}

export interface TobaccoUse {
  total: Total6;
  male: Male4;
  female: Female4;
}

export interface Total6 {
  text: string;
}

export interface Male4 {
  text: string;
}

export interface Female4 {
  text: string;
}

export interface ChildrenUnderTheAgeOf5YearsUnderweight {
  text: string;
}

export interface CurrentlyMarriedWomenAges1549 {
  text: string;
}

export interface EducationExpenditures {
  text: string;
}

export interface Literacy {
  "total population": TotalPopulation3;
  male: Male5;
  female: Female5;
}

export interface TotalPopulation3 {
  text: string;
}

export interface Male5 {
  text: string;
}

export interface Female5 {
  text: string;
}

export interface SchoolLifeExpectancyPrimaryToTertiaryEducation {
  total: Total7;
  male: Male6;
  female: Female6;
}

export interface Total7 {
  text: string;
}

export interface Male6 {
  text: string;
}

export interface Female6 {
  text: string;
}

export interface YouthUnemploymentRateAges1524 {
  total: Total8;
  male: Male7;
  female: Female7;
}

export interface Total8 {
  text: string;
}

export interface Male7 {
  text: string;
}

export interface Female7 {
  text: string;
}

export interface Government {
  "Country name": CountryName;
  "Government type": GovernmentType;
  Capital: Capital;
  "Administrative divisions": AdministrativeDivisions;
  Independence: Independence;
  "National holiday": NationalHoliday;
  Constitution: Constitution;
  "Legal system": LegalSystem;
  "International law organization participation": InternationalLawOrganizationParticipation;
  Citizenship: Citizenship;
  Suffrage: Suffrage;
  "Executive branch": ExecutiveBranch;
  "Legislative branch": LegislativeBranch;
  "Judicial branch": JudicialBranch;
  "Political parties and leaders": PoliticalPartiesAndLeaders;
  "International organization participation": InternationalOrganizationParticipation;
  "Diplomatic representation in the US": DiplomaticRepresentationInTheUs;
  "Diplomatic representation from the US": DiplomaticRepresentationFromTheUs;
  "Flag description": FlagDescription;
  "National symbol(s)": NationalSymbolS;
  "National anthem": NationalAnthem;
  "National heritage": NationalHeritage;
}

export interface CountryName {
  "conventional long form": ConventionalLongForm;
  "conventional short form": ConventionalShortForm;
  "local long form": LocalLongForm;
  "local short form": LocalShortForm;
  etymology: Etymology;
}

export interface ConventionalLongForm {
  text: string;
}

export interface ConventionalShortForm {
  text: string;
}

export interface LocalLongForm {
  text: string;
}

export interface LocalShortForm {
  text: string;
}

export interface Etymology {
  text: string;
}

export interface GovernmentType {
  text: string;
}

export interface Capital {
  name: Name;
  "geographic coordinates": GeographicCoordinates2;
  "time difference": TimeDifference;
  etymology: Etymology2;
}

export interface Name {
  text: string;
}

export interface GeographicCoordinates2 {
  text: string;
}

export interface TimeDifference {
  text: string;
}

export interface Etymology2 {
  text: string;
}

export interface AdministrativeDivisions {
  text: string;
}

export interface Independence {
  text: string;
}

export interface NationalHoliday {
  text: string;
}

export interface Constitution {
  history: History;
  amendments: Amendments;
}

export interface History {
  text: string;
}

export interface Amendments {
  text: string;
}

export interface LegalSystem {
  text: string;
}

export interface InternationalLawOrganizationParticipation {
  text: string;
}

export interface Citizenship {
  "citizenship by birth": CitizenshipByBirth;
  "citizenship by descent only": CitizenshipByDescentOnly;
  "dual citizenship recognized": DualCitizenshipRecognized;
  "residency requirement for naturalization": ResidencyRequirementForNaturalization;
}

export interface CitizenshipByBirth {
  text: string;
}

export interface CitizenshipByDescentOnly {
  text: string;
}

export interface DualCitizenshipRecognized {
  text: string;
}

export interface ResidencyRequirementForNaturalization {
  text: string;
}

export interface Suffrage {
  text: string;
}

export interface ExecutiveBranch {
  "chief of state": ChiefOfState;
  "head of government": HeadOfGovernment;
  cabinet: Cabinet;
  "elections/appointments": ElectionsAppointments;
  "election results": ElectionResults;
}

export interface ChiefOfState {
  text: string;
}

export interface HeadOfGovernment {
  text: string;
}

export interface Cabinet {
  text: string;
}

export interface ElectionsAppointments {
  text: string;
}

export interface ElectionResults {
  text: string;
}

export interface LegislativeBranch {
  description: Description;
  elections: Elections;
  "election results": ElectionResults2;
  note: string;
}

export interface Description {
  text: string;
}

export interface Elections {
  text: string;
}

export interface ElectionResults2 {
  text: string;
}

export interface JudicialBranch {
  "highest court(s)": HighestCourtS;
  "judge selection and term of office": JudgeSelectionAndTermOfOffice;
  "subordinate courts": SubordinateCourts;
}

export interface HighestCourtS {
  text: string;
}

export interface JudgeSelectionAndTermOfOffice {
  text: string;
}

export interface SubordinateCourts {
  text: string;
}

export interface PoliticalPartiesAndLeaders {
  text: string;
}

export interface InternationalOrganizationParticipation {
  text: string;
}

export interface DiplomaticRepresentationInTheUs {
  "chief of mission": ChiefOfMission;
  chancery: Chancery;
  telephone: Telephone;
  FAX: Fax;
  "email address and website": EmailAddressAndWebsite;
  "consulate(s) general": ConsulateSGeneral;
}

export interface ChiefOfMission {
  text: string;
}

export interface Chancery {
  text: string;
}

export interface Telephone {
  text: string;
}

export interface Fax {
  text: string;
}

export interface EmailAddressAndWebsite {
  text: string;
}

export interface ConsulateSGeneral {
  text: string;
}

export interface DiplomaticRepresentationFromTheUs {
  "chief of mission": ChiefOfMission2;
  embassy: Embassy;
  "mailing address": MailingAddress;
  telephone: Telephone2;
  FAX: Fax2;
  "email address and website": EmailAddressAndWebsite2;
  "consulate(s) general": ConsulateSGeneral2;
  "consulate(s)": ConsulateS;
}

export interface ChiefOfMission2 {
  text: string;
}

export interface Embassy {
  text: string;
}

export interface MailingAddress {
  text: string;
}

export interface Telephone2 {
  text: string;
}

export interface Fax2 {
  text: string;
}

export interface EmailAddressAndWebsite2 {
  text: string;
}

export interface ConsulateSGeneral2 {
  text: string;
}

export interface ConsulateS {
  text: string;
}

export interface FlagDescription {
  text: string;
}

export interface NationalSymbolS {
  text: string;
}

export interface NationalAnthem {
  name: Name2;
  "lyrics/music": LyricsMusic;
  note: string;
}

export interface Name2 {
  text: string;
}

export interface LyricsMusic {
  text: string;
}

export interface NationalHeritage {
  "total World Heritage Sites": TotalWorldHeritageSites;
  "selected World Heritage Site locales": SelectedWorldHeritageSiteLocales;
}

export interface TotalWorldHeritageSites {
  text: string;
}

export interface SelectedWorldHeritageSiteLocales {
  text: string;
}

export interface Economy {
  "Economic overview": EconomicOverview;
  "Real GDP (purchasing power parity)": RealGdpPurchasingPowerParity;
  "Real GDP growth rate": RealGdpGrowthRate;
  "Real GDP per capita": RealGdpPerCapita;
  "GDP (official exchange rate)": GdpOfficialExchangeRate;
  "Inflation rate (consumer prices)": InflationRateConsumerPrices;
  "Credit ratings": CreditRatings;
  "GDP - composition, by sector of origin": GdpCompositionBySectorOfOrigin;
  "GDP - composition, by end use": GdpCompositionByEndUse;
  "Agricultural products": AgriculturalProducts;
  Industries: Industries;
  "Industrial production growth rate": IndustrialProductionGrowthRate;
  "Labor force": LaborForce;
  "Labor force - by occupation": LaborForceByOccupation;
  "Unemployment rate": UnemploymentRate;
  "Youth unemployment rate (ages 15-24)": YouthUnemploymentRateAges15242;
  "Population below poverty line": PopulationBelowPovertyLine;
  "Gini Index coefficient - distribution of family income": GiniIndexCoefficientDistributionOfFamilyIncome;
  "Average household expenditures": AverageHouseholdExpenditures;
  "Household income or consumption by percentage share": HouseholdIncomeOrConsumptionByPercentageShare;
  Budget: Budget;
  "Budget surplus (+) or deficit (-)": BudgetSurplusOrDeficit;
  "Public debt": PublicDebt;
  "Taxes and other revenues": TaxesAndOtherRevenues;
  "Fiscal year": FiscalYear;
  "Current account balance": CurrentAccountBalance;
  Exports: Exports;
  "Exports - partners": ExportsPartners;
  "Exports - commodities": ExportsCommodities;
  Imports: Imports;
  "Imports - partners": ImportsPartners;
  "Imports - commodities": ImportsCommodities;
  "Reserves of foreign exchange and gold": ReservesOfForeignExchangeAndGold;
  "Debt - external": DebtExternal;
  "Exchange rates": ExchangeRates;
}

export interface EconomicOverview {
  text: string;
}

export interface RealGdpPurchasingPowerParity {
  "Real GDP (purchasing power parity) 2021": RealGdpPurchasingPowerParity2021;
  "Real GDP (purchasing power parity) 2020": RealGdpPurchasingPowerParity2020;
  "Real GDP (purchasing power parity) 2019": RealGdpPurchasingPowerParity2019;
}

export interface RealGdpPurchasingPowerParity2021 {
  text: string;
}

export interface RealGdpPurchasingPowerParity2020 {
  text: string;
}

export interface RealGdpPurchasingPowerParity2019 {
  text: string;
}

export interface RealGdpGrowthRate {
  "Real GDP growth rate 2021": RealGdpGrowthRate2021;
  "Real GDP growth rate 2020": RealGdpGrowthRate2020;
  "Real GDP growth rate 2019": RealGdpGrowthRate2019;
}

export interface RealGdpGrowthRate2021 {
  text: string;
}

export interface RealGdpGrowthRate2020 {
  text: string;
}

export interface RealGdpGrowthRate2019 {
  text: string;
}

export interface RealGdpPerCapita {
  "Real GDP per capita 2021": RealGdpPerCapita2021;
  "Real GDP per capita 2020": RealGdpPerCapita2020;
  "Real GDP per capita 2019": RealGdpPerCapita2019;
}

export interface RealGdpPerCapita2021 {
  text: string;
}

export interface RealGdpPerCapita2020 {
  text: string;
}

export interface RealGdpPerCapita2019 {
  text: string;
}

export interface GdpOfficialExchangeRate {
  text: string;
}

export interface InflationRateConsumerPrices {
  "Inflation rate (consumer prices) 2021": InflationRateConsumerPrices2021;
  "Inflation rate (consumer prices) 2020": InflationRateConsumerPrices2020;
  "Inflation rate (consumer prices) 2019": InflationRateConsumerPrices2019;
}

export interface InflationRateConsumerPrices2021 {
  text: string;
}

export interface InflationRateConsumerPrices2020 {
  text: string;
}

export interface InflationRateConsumerPrices2019 {
  text: string;
}

export interface CreditRatings {
  "Fitch rating": FitchRating;
  "Moody's rating": MoodySRating;
  "Standard & Poors rating": StandardPoorsRating;
  note: string;
}

export interface FitchRating {
  text: string;
}

export interface MoodySRating {
  text: string;
}

export interface StandardPoorsRating {
  text: string;
}

export interface GdpCompositionBySectorOfOrigin {
  agriculture: Agriculture;
  industry: Industry;
  services: Services;
}

export interface Agriculture {
  text: string;
}

export interface Industry {
  text: string;
}

export interface Services {
  text: string;
}

export interface GdpCompositionByEndUse {
  "household consumption": HouseholdConsumption;
  "government consumption": GovernmentConsumption;
  "investment in fixed capital": InvestmentInFixedCapital;
  "investment in inventories": InvestmentInInventories;
  "exports of goods and services": ExportsOfGoodsAndServices;
  "imports of goods and services": ImportsOfGoodsAndServices;
}

export interface HouseholdConsumption {
  text: string;
}

export interface GovernmentConsumption {
  text: string;
}

export interface InvestmentInFixedCapital {
  text: string;
}

export interface InvestmentInInventories {
  text: string;
}

export interface ExportsOfGoodsAndServices {
  text: string;
}

export interface ImportsOfGoodsAndServices {
  text: string;
}

export interface AgriculturalProducts {
  text: string;
}

export interface Industries {
  text: string;
}

export interface IndustrialProductionGrowthRate {
  text: string;
}

export interface LaborForce {
  text: string;
}

export interface LaborForceByOccupation {
  agriculture: Agriculture2;
  industry: Industry2;
  services: Services2;
}

export interface Agriculture2 {
  text: string;
}

export interface Industry2 {
  text: string;
}

export interface Services2 {
  text: string;
}

export interface UnemploymentRate {
  "Unemployment rate 2021": UnemploymentRate2021;
  "Unemployment rate 2020": UnemploymentRate2020;
  "Unemployment rate 2019": UnemploymentRate2019;
}

export interface UnemploymentRate2021 {
  text: string;
}

export interface UnemploymentRate2020 {
  text: string;
}

export interface UnemploymentRate2019 {
  text: string;
}

export interface YouthUnemploymentRateAges15242 {
  total: Total9;
  male: Male8;
  female: Female8;
}

export interface Total9 {
  text: string;
}

export interface Male8 {
  text: string;
}

export interface Female8 {
  text: string;
}

export interface PopulationBelowPovertyLine {
  text: string;
}

export interface GiniIndexCoefficientDistributionOfFamilyIncome {
  "Gini Index coefficient - distribution of family income 2013": GiniIndexCoefficientDistributionOfFamilyIncome2013;
}

export interface GiniIndexCoefficientDistributionOfFamilyIncome2013 {
  text: string;
}

export interface AverageHouseholdExpenditures {
  "on food": OnFood;
  "on alcohol and tobacco": OnAlcoholAndTobacco;
}

export interface OnFood {
  text: string;
}

export interface OnAlcoholAndTobacco {
  text: string;
}

export interface HouseholdIncomeOrConsumptionByPercentageShare {
  "lowest 10%": Lowest10;
  "highest 10%": Highest10;
}

export interface Lowest10 {
  text: string;
}

export interface Highest10 {
  text: string;
}

export interface Budget {
  revenues: Revenues;
  expenditures: Expenditures;
}

export interface Revenues {
  text: string;
}

export interface Expenditures {
  text: string;
}

export interface BudgetSurplusOrDeficit {
  text: string;
}

export interface PublicDebt {
  "Public debt 2020": PublicDebt2020;
  "Public debt 2019": PublicDebt2019;
  "Public debt 2018": PublicDebt2018;
}

export interface PublicDebt2020 {
  text: string;
}

export interface PublicDebt2019 {
  text: string;
}

export interface PublicDebt2018 {
  text: string;
}

export interface TaxesAndOtherRevenues {
  text: string;
}

export interface FiscalYear {
  text: string;
}

export interface CurrentAccountBalance {
  "Current account balance 2021": CurrentAccountBalance2021;
  "Current account balance 2020": CurrentAccountBalance2020;
  "Current account balance 2019": CurrentAccountBalance2019;
}

export interface CurrentAccountBalance2021 {
  text: string;
}

export interface CurrentAccountBalance2020 {
  text: string;
}

export interface CurrentAccountBalance2019 {
  text: string;
}

export interface Exports {
  "Exports 2021": Exports2021;
  "Exports 2020": Exports2020;
  "Exports 2019": Exports2019;
}

export interface Exports2021 {
  text: string;
}

export interface Exports2020 {
  text: string;
}

export interface Exports2019 {
  text: string;
}

export interface ExportsPartners {
  text: string;
}

export interface ExportsCommodities {
  text: string;
}

export interface Imports {
  "Imports 2021": Imports2021;
  "Imports 2020": Imports2020;
  "Imports 2019": Imports2019;
}

export interface Imports2021 {
  text: string;
}

export interface Imports2020 {
  text: string;
}

export interface Imports2019 {
  text: string;
}

export interface ImportsPartners {
  text: string;
}

export interface ImportsCommodities {
  text: string;
}

export interface ReservesOfForeignExchangeAndGold {
  "Reserves of foreign exchange and gold 31 December 2021": ReservesOfForeignExchangeAndGold31December2021;
  "Reserves of foreign exchange and gold 31 December 2020": ReservesOfForeignExchangeAndGold31December2020;
  "Reserves of foreign exchange and gold 31 December 2019": ReservesOfForeignExchangeAndGold31December2019;
}

export interface ReservesOfForeignExchangeAndGold31December2021 {
  text: string;
}

export interface ReservesOfForeignExchangeAndGold31December2020 {
  text: string;
}

export interface ReservesOfForeignExchangeAndGold31December2019 {
  text: string;
}

export interface DebtExternal {
  "Debt - external 2019": DebtExternal2019;
  "Debt - external 2018": DebtExternal2018;
}

export interface DebtExternal2019 {
  text: string;
}

export interface DebtExternal2018 {
  text: string;
}

export interface ExchangeRates {
  Currency: Currency;
  "Exchange rates 2021": ExchangeRates2021;
  "Exchange rates 2020": ExchangeRates2020;
  "Exchange rates 2019": ExchangeRates2019;
  "Exchange rates 2018": ExchangeRates2018;
  "Exchange rates 2017": ExchangeRates2017;
}

export interface Currency {
  text: string;
}

export interface ExchangeRates2021 {
  text: string;
}

export interface ExchangeRates2020 {
  text: string;
}

export interface ExchangeRates2019 {
  text: string;
}

export interface ExchangeRates2018 {
  text: string;
}

export interface ExchangeRates2017 {
  text: string;
}

export interface Communications {
  "Telephones - fixed lines": TelephonesFixedLines;
  "Telephones - mobile cellular": TelephonesMobileCellular;
  "Telecommunication systems": TelecommunicationSystems;
  "Broadcast media": BroadcastMedia;
  "Internet country code": InternetCountryCode;
  "Internet users": InternetUsers;
  "Broadband - fixed subscriptions": BroadbandFixedSubscriptions;
}

export interface TelephonesFixedLines {
  "total subscriptions": TotalSubscriptions;
  "subscriptions per 100 inhabitants": SubscriptionsPer100Inhabitants;
}

export interface TotalSubscriptions {
  text: string;
}

export interface SubscriptionsPer100Inhabitants {
  text: string;
}

export interface TelephonesMobileCellular {
  "total subscriptions": TotalSubscriptions2;
  "subscriptions per 100 inhabitants": SubscriptionsPer100Inhabitants2;
}

export interface TotalSubscriptions2 {
  text: string;
}

export interface SubscriptionsPer100Inhabitants2 {
  text: string;
}

export interface TelecommunicationSystems {
  "general assessment": GeneralAssessment;
  domestic: Domestic;
  international: International;
}

export interface GeneralAssessment {
  text: string;
}

export interface Domestic {
  text: string;
}

export interface International {
  text: string;
}

export interface BroadcastMedia {
  text: string;
}

export interface InternetCountryCode {
  text: string;
}

export interface InternetUsers {
  total: Total10;
  "percent of population": PercentOfPopulation;
}

export interface Total10 {
  text: string;
}

export interface PercentOfPopulation {
  text: string;
}

export interface BroadbandFixedSubscriptions {
  total: Total11;
  "subscriptions per 100 inhabitants": SubscriptionsPer100Inhabitants3;
}

export interface Total11 {
  text: string;
}

export interface SubscriptionsPer100Inhabitants3 {
  text: string;
}

export interface MilitaryAndSecurity {
  "Military and security forces": MilitaryAndSecurityForces;
  "Military expenditures": MilitaryExpenditures;
  "Military and security service personnel strengths": MilitaryAndSecurityServicePersonnelStrengths;
  "Military equipment inventories and acquisitions": MilitaryEquipmentInventoriesAndAcquisitions;
  "Military service age and obligation": MilitaryServiceAgeAndObligation;
  "Military deployments": MilitaryDeployments;
  "Military - note": MilitaryNote;
}

export interface MilitaryAndSecurityForces {
  text: string;
  note: string;
}

export interface MilitaryExpenditures {
  "Military Expenditures 2022": MilitaryExpenditures2022;
  "Military Expenditures 2021": MilitaryExpenditures2021;
  "Military Expenditures 2020": MilitaryExpenditures2020;
  "Military Expenditures 2019": MilitaryExpenditures2019;
  "Military Expenditures 2018": MilitaryExpenditures2018;
  note: string;
}

export interface MilitaryExpenditures2022 {
  text: string;
}

export interface MilitaryExpenditures2021 {
  text: string;
}

export interface MilitaryExpenditures2020 {
  text: string;
}

export interface MilitaryExpenditures2019 {
  text: string;
}

export interface MilitaryExpenditures2018 {
  text: string;
}

export interface MilitaryAndSecurityServicePersonnelStrengths {
  text: string;
}

export interface MilitaryEquipmentInventoriesAndAcquisitions {
  text: string;
}

export interface MilitaryServiceAgeAndObligation {
  text: string;
  note: string;
}

export interface MilitaryDeployments {
  text: string;
}

export interface MilitaryNote {
  text: string;
}

export interface TransnationalIssues {
  "Disputes - international": DisputesInternational;
  "Refugees and internally displaced persons": RefugeesAndInternallyDisplacedPersons;
}

export interface DisputesInternational {
  text: string;
}

export interface RefugeesAndInternallyDisplacedPersons {
  "stateless persons": StatelessPersons;
}

export interface StatelessPersons {
  text: string;
}
