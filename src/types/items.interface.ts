export interface IUserData {
  id: number;
  username: string;
  wallet: number;
  limit_clicks: number;
}

export interface ITaskData {
  task_in_db: string;
  task_name: string;
  task_price: number;
  url_of_btn: string;
  user_id: number | null;
}

export interface IRefData {
  referal_id: number;
  referal_name: string;
}

export interface IPlayerData {
  username: string,
  user_id: number,
  balance: number
}

export interface IPlayerData {
  user_id: number;
  username: string;
  wallet: number;
}

export interface IPlayerDataTemporary {
  user_id: number;
  username: string;
  clicks: number;
}
  