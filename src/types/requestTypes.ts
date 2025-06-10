// For creating a user
export interface CreateUserRequestBody {
  name: string;
  email: string;
}

// For logging mood
export interface LogMoodRequestBody {
  userId: string;
  mood: number;
  note?: string;
}
