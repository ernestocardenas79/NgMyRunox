export function myRunox(): string {
  return 'my-runox';
}

export interface Player {
   id: string,

}

export interface Room {
  host: Player,
  players: Player[],
  pointForWin: number,
  name: string
}

export enum RoomStatus{
  OPEN,
  PLAYING
}

/// ViewModel

export interface GamingRoom{
  status: RoomStatus
  room: Room
}

