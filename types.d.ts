type Champion = {
    Position: number,
    Champion: string,
    NumOfReigns: number,
    CombinedDays: string,
    CombinedDefenses: string
}

type ChampionByReign = {
    Num: number,
    Champion: string,
    DateOfTitleWon: string,
    Reign: number,
    NumOfDays: number | string,
    Defenses: number
}

type LongestReigningChampion = {
    Champion: string,
    LongestDays: string
}

type ChampionWithMostReigns = {
    Champion: string,
    MostReigns: number
}

type YoungestChampion = {
    Champion: string,
    AgeInYears: number,
    AddedMonths: number,
    AddedDays: number
}

type OldestChampion = {
    Champion: string,
    AgeInYears: number,
    AddedMonths: number,
    AddedDays: number
}

type ChampionWithMostDefenses = {
    Champion: string,
    Defenses: number
}

type ChampionWithMostCombinedDefenses = {
    Champion: string,
    SumOfDefenses: string
}

type TripleWorldChampion = {
    Champion: string,
    IWGPChampDate: string,
    GHCChampDate: string,
    AJPWChampDate: string
}

type ChampionWithYearsMonthsDays = {
    Champion: string,
    Years: number,
    Months: number,
    Days: number
}