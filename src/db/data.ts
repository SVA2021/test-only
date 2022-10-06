import {RecordType, SectionType} from "../types/types"

const BaletData: RecordType[] = [
    {
        year: 2004,
        description: 'Nothing interesting to specify in this section 1',
    },
    {
        year: 2005,
        description: 'Nothing interesting to specify in this section 2',
    },
    {
        year: 2006,
        description: 'Nothing interesting to specify in this section 3',
    },
    {
        year: 2007,
        description: 'Nothing interesting to specify in this section 4',
    },
    {
        year: 2008,
        description: 'Nothing interesting to specify in this section 5',
    },
    {
        year: 2009,
        description: 'Nothing interesting to specify in this section 6',
    },
]

const BookData: RecordType[] = [
    {
        year: 1998,
        description: 'Nothing interesting to specify in this section 1',
    },
    {
        year: 1999,
        description: 'Nothing interesting to specify in this section 2',
    },
    {
        year: 2000,
        description: 'Nothing interesting to specify in this section 3',
    },
    {
        year: 2001,
        description: 'Nothing interesting to specify in this section 4',
    },
    {
        year: 2002,
        description: 'Nothing interesting to specify in this section 5',
    },
    {
        year: 2003,
        description: 'Nothing interesting to specify in this section 6',
    },
]

const PoliticData: RecordType[] = [
    {
        year: 1992,
        description: 'Nothing interesting to specify in this section 1',
    },
    {
        year: 1993,
        description: 'Nothing interesting to specify in this section 2',
    },
    {
        year: 1994,
        description: 'Nothing interesting to specify in this section 3',
    },
    {
        year: 1995,
        description: 'Nothing interesting to specify in this section 4',
    },
    {
        year: 1996,
        description: 'Nothing interesting to specify in this section 5',
    },
    {
        year: 1997,
        description: 'Nothing interesting to specify in this section 6',
    },
]

const SportData: RecordType[] = [
    {
        year: 1980,
        description: 'Олимпийские игры в Москве',
    },
    {
        year: 1981,
        description: 'Всемирный кубок по какому то виду спорта или даже нескольким и не только',
    },
    {
        year: 1982,
        description: 'Всемирный кубок по какому то виду спорта или даже нескольким и не только',
    },
    {
        year: 1983,
        description: 'Всемирный кубок по какому то виду спорта или даже нескольким и не только',
    },
    {
        year: 1984,
        description: 'Всемирный кубок по какому то виду спорта или даже нескольким и не только',
    },
    {
        year: 1985,
        description: 'Всемирный кубок по какому то виду спорта или даже нескольким и не только',
    },
]

const CinemaData: RecordType[] = [
    {
        year: 1986,
        description: 'Some new Hollywood blockbaster with many explosions',
    },
    {
        year: 1987,
        description: 'Some new Hollywood comedy with many stupid humor',
    },
    {
        year: 1988,
        description: 'Some new Hollywood romantic drama with many cry and something more',
    },
    {
        year: 1989,
        description: 'Some new Hollywood fantastic with aliens lasers and something more',
    },
    {
        year: 1990,
        description: 'Some new Hollywood fantastic with aliens lasers and something more',
    },
    {
        year: 1991,
        description: 'Some new Hollywood fantastic with aliens lasers and something more',
    },
]

const SpaceData: RecordType[] = [
    {
        year: 2015,
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
        year: 2016,
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
    {
        year: 2017,
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
    },
    {
        year: 2018,
        description: 'В России прошло солнечное затмение',
    },
    {
        year: 2019,
        description: 'Standard template text instead of lorem ipsum',
    },
    {
        year: 2020,
        description: 'Standard template text instead of lorem ipsum',
    },
]

export const fakeData : SectionType[] = [
    {
        name: 'Балет и театр',
        data: BaletData,
    },
    
    {
        name: 'Литература',
        data: BookData,
    },
    {
        name: 'Кино и Сериалы',
        data: CinemaData,
    },
    {
        name: 'Политика и мир',
        data: PoliticData,
    },
    {
        name: 'Космос и Технологии',
        data: SpaceData,
    },
    {
        name: 'Спорт',
        data: SportData,
    },
]