import { CellParams, ColDef, RowId } from '@material-ui/x-grid';
import { NamedExoticComponent } from 'react';

declare function renderAvatar(params: CellParams): JSX.Element;

declare function renderCountry(params: CellParams): JSX.Element;

declare function renderDone(params: CellParams): JSX.Element;

declare function renderEmail(params: CellParams): JSX.Element;

declare function renderIncoterm(params: CellParams): JSX.Element;

interface DemoLinkProps {
    href: string;
    children: string;
}
declare const DemoLink: NamedExoticComponent<DemoLinkProps>;
declare function renderLink(params: CellParams): JSX.Element;

declare function renderPnl(params: CellParams): JSX.Element;

declare function renderProgress(params: CellParams): JSX.Element;

declare function renderRating(params: CellParams): JSX.Element;

declare function renderStatus(params: CellParams): JSX.Element;

declare function renderTotalPrice(params: CellParams): JSX.Element;

interface GeneratableColDef extends ColDef {
    generateData: (data: any) => any;
}

declare const random: (min: number, max: number) => number;
declare const randomInt: (min: number, max: number) => number;
declare const randomPrice: (min?: number, max?: number) => number;
declare const randomRate: () => number;
declare const randomDate: (start: any, end: any) => Date;
declare const getDate: () => Date;
declare const randomArrayItem: (arr: any[]) => any;
declare const randomColor: () => any;
declare const randomId: () => string;
declare const randomDesk: () => string;
declare const randomCommodity: () => any;
declare const randomTraderName: () => string;
declare const randomUserName: () => string;
declare const randomEmail: () => string;
declare const randomUrl: () => string;
declare const randomPhoneNumber: () => string;
declare const randomUnitPrice: () => number;
declare const randomUnitPriceCurrency: () => any;
declare const randomQuantity: () => number;
declare const randomFeeRate: () => number;
declare const randomIncoterm: () => any;
declare const randomStatusOptions: () => any;
declare const randomPnL: () => number;
declare const randomMaturityDate: () => Date;
declare const randomTradeDate: () => Date;
declare const randomBrokerId: () => string;
declare const randomCompanyName: () => string;
declare const randomCountry: () => any;
declare const randomCurrency: () => any;
declare const randomAddress: () => string;
declare const randomCity: () => string;
declare const randomTaxCode: () => any;
declare const randomContractType: () => any;
declare const randomRateType: () => any;
declare const randomCreatedDate: () => Date;
declare const randomUpdatedDate: () => Date;
declare const randomAvatar: () => {
    name: string;
    color: any;
};
declare const randomJobTitle: () => string;
declare const randomRating: () => number;
declare const generateName: (data: any) => any;
declare const generateFilledQuantity: (data: any) => number;
declare const generateIsFilled: (data: any) => boolean;
declare const generateSubTotal: (data: any) => number;
declare const generateFeeAmount: (data: any) => number;
declare const generateTotalPrice: (data: any) => any;

interface DataRowModel {
    id: RowId;
    [field: string]: any;
}
interface GridData {
    columns: ColDef[];
    rows: DataRowModel[];
}
declare function getRealData(rowLength: number, columns: any[]): Promise<GridData>;

declare const getCommodityColumns: () => any[];

declare const getEmployeeColumns: () => any[];

declare type DemoDataReturnType = {
    data: GridData;
    setRowLength: (count: number) => void;
    loadNewData: () => void;
};
declare type DataSet = 'Commodity' | 'Employee';
interface DemoDataOptions {
    dataSet: DataSet;
    rowLength: number;
    maxColumns?: number;
}
declare const useDemoData: (options: DemoDataOptions) => DemoDataReturnType;

export { DataRowModel, DemoDataOptions, DemoDataReturnType, DemoLink, GeneratableColDef, GridData, generateFeeAmount, generateFilledQuantity, generateIsFilled, generateName, generateSubTotal, generateTotalPrice, getCommodityColumns, getDate, getEmployeeColumns, getRealData, random, randomAddress, randomArrayItem, randomAvatar, randomBrokerId, randomCity, randomColor, randomCommodity, randomCompanyName, randomContractType, randomCountry, randomCreatedDate, randomCurrency, randomDate, randomDesk, randomEmail, randomFeeRate, randomId, randomIncoterm, randomInt, randomJobTitle, randomMaturityDate, randomPhoneNumber, randomPnL, randomPrice, randomQuantity, randomRate, randomRateType, randomRating, randomStatusOptions, randomTaxCode, randomTradeDate, randomTraderName, randomUnitPrice, randomUnitPriceCurrency, randomUpdatedDate, randomUrl, randomUserName, renderAvatar, renderCountry, renderDone, renderEmail, renderIncoterm, renderLink, renderPnl, renderProgress, renderRating, renderStatus, renderTotalPrice, useDemoData };
