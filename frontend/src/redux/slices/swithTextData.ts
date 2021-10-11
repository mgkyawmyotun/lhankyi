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
export type Language = 'English' | 'Burma';
interface TextData {
  register: RegisterTextData;
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

export default switchTextSlice.reducer;
