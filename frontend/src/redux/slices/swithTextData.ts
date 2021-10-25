import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../store';

export interface RegisterTextData {
  intro_text: string;
  intro_text_sm: string;
  header: string;
  name_field: string;
  button: string;
  to_login: string;
}
export interface DeskTextData {
  header: string;
  desk_name: string;
  create: string;
}
export interface CardTextData {
  header: string;
  back: string;
  card_name: string;
  create: string;
}
export interface PlayTextData {
  complete: string;
  back: string;
}
export interface LoginTextData {
  label: string;
  create: string;
  to_register: string;
}
export type Language = 'English' | 'Burma';
interface TextData {
  register: RegisterTextData;
  desk: DeskTextData;
  card: CardTextData;
  play: PlayTextData;
  login: LoginTextData;
}
const textDataBurma = {
  register: {
    intro_text: 'စာမှတ်ရတာအခက်အခဲဖြစ်နေပါသလား?',
    intro_text_sm: 'သင့်အတွက်လှန်ကြည့်ရှိပါတယ်',
    header: 'အကောင့်ဖွင့်မည်',
    name_field: 'နာမည်',
    button: 'ဖွင့်မည်',
    to_login: 'အကောင့်ရှိပြီးသားလား?',
  },
  login: {
    label: 'အကောင့်သို့ဝင်မည်',
    create: 'ဝင်မည်',
    to_register: 'အကောင့်မရှိဘူးလား?',
  },
  desk: {
    header: 'စာအုပ်စဉ်',
    desk_name: 'စဉ်နမည်',
    create: 'လုပ်မည်',
  },
  card: {
    header: 'ကဒ်များ',
    back: 'နောက်သို့',
    card_name: 'ကဒ်နမည်',
    create: 'လုပ်မည်',
  },
  play: {
    complete: 'ပြီးပါပြီ',
    back: 'နောက်သို့',
  },
};
const textDataEnglish = {
  register: {
    intro_text: 'Getting trouble on memorizing stuff?',
    intro_text_sm: 'lhankyi',
    header: 'Register Form',
    name_field: 'name',
    button: 'Register',
    to_login: 'already register?',
  },

  login: {
    label: 'Login to Account',
    create: 'Login',
    to_register: 'no account?',
  },
  desk: {
    header: 'Your Desks',
    desk_name: 'Desk Name',
    create: 'Create',
  },
  card: {
    header: 'Your Cards',
    back: 'Back',
    card_name: 'Card Name',
    create: 'Create',
  },
  play: {
    complete: 'Completed',
    back: 'Go Back',
  },
};
// Define a type for the slice state
interface TextSwitchState {
  text: TextData;
  language: Language;
}

// Define the initial state using that type
const initialState: TextSwitchState = {
  text: textDataBurma,
  language: 'English',
};

export const switchTextSlice = createSlice({
  name: 'switchText',
  initialState,
  reducers: {
    switchToAnother: (state) => {
      if (state.language === 'English') {
        state.text = textDataEnglish;
        state.language = 'Burma';
      } else {
        state.text = textDataBurma;
        state.language = 'English';
      }
    },
  },
});

export const { switchToAnother } = switchTextSlice.actions;
export const selectRegister = (state: RootState) =>
  state.switchtext.text.register;
export const selectLanguage = (state: RootState) => state.switchtext.language;
export const selectDesk = (state: RootState) => state.switchtext.text.desk;
export const selectCard = (state: RootState) => state.switchtext.text.card;
export const selectPlay = (state: RootState) => state.switchtext.text.play;
export const selectLogin = (state: RootState) => state.switchtext.text.login;

export default switchTextSlice.reducer;
