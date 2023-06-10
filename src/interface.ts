export interface RaceInterface {
  grandPrix: string;
  date: Date;
  driver: string;
  carName: string;
  laps: number;
  time: Date;
}
export interface DriverInterface {
  pos: number;
  driver: string;
  nationality: string;
  carName: string;
  pts: number;
}
export interface TeamInterface {
  pos: number;
  team: string;
  pts: number;
}
export interface LapInterface {
  grandPrix: string;
  driver: string;
  carName: string;
  time: Date;
}
