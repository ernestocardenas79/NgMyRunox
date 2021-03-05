export interface Player {
  id: string;
  name: string;
  avatar: string;
}

export interface Room {
  host: Player;
  name: string;
  playersLimit: number;
  scoreLimit: number;
  players?: Player[];
}

export enum RoomState {
  OPEN,
  PLAYING,
}

/// ViewModel

export interface GamingRoom {
  status: RoomState;
  room: Room;
}
