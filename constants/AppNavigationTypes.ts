
export type RootStackParamList = {

    Home: undefined;
  
    Profile: { userId: string };
  
    ScoreInput: {
  
      overs: number;
  
      oversPerBowler: number;
  
      location: string;
  
      date: string;
  
      ballType: string;
  
      tossWinner: string;
  
      decision: string;
  
    };
  
  };
  