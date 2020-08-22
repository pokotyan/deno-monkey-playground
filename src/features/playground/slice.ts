import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AppThunk, RootState } from '../../app/store';

type Ast = {
  Statements: any[];
};

interface EditorState {
  code: string;
  evaluated: string | null;
  ast: Ast;
  isTreeView: boolean;
  isLoading: boolean;
}

const initialState: EditorState = {
  code: `let map = fn(arr, f) {
  let iter = fn(arr, accumulated) {
    if (len(arr) == 0) {
      accumulated
    } else {
      iter(rest(arr), push(accumulated, f(first(arr))));
    }
  };
  iter(arr, [])
};

let reduce = fn(arr, initial, f) {
  let iter = fn(arr, result) {
    if (len(arr) == 0) {
      result
    } else {
      iter(rest(arr), f(result, first(arr)));
    }
  };
  iter(arr, initial)
};

let sum = fn(arr) {
  reduce(arr, 0, fn(initial, el) { initial + el });
};

sum([1,2,3,4,100]);
  `,
  evaluated: null,
  ast: {
    Statements: [],
  },
  isTreeView: true,
  isLoading: false,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setEvaluated: (state, action: PayloadAction<string>) => {
      state.evaluated = action.payload;
    },
    setAst: (state, action: PayloadAction<Ast>) => {
      state.ast = action.payload;
    },
    togglePreviewMode: (state) => {
      state.isTreeView = !state.isTreeView;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setCode,
  setEvaluated,
  setAst,
  togglePreviewMode,
  startLoading,
  endLoading,
} = editorSlice.actions;

export const run = (code: string): AppThunk => async (dispatch) => {
  dispatch(startLoading());
  const evaluated: AxiosResponse<string> = await axios.post(
    'https://deno-monkey.herokuapp.com/eval/',
    {
      code,
    }
  );

  const ast: AxiosResponse<Ast> = await axios.post(
    'https://deno-monkey.herokuapp.com/ast/',
    {
      code,
    }
  );
  dispatch(endLoading());
  dispatch(setEvaluated(evaluated.data));
  dispatch(setAst(ast.data));
};

export const selectCode = (state: RootState): string => state.editor.code;
export const selectEvaluated = (state: RootState): string | null =>
  state.editor.evaluated;
export const selectAst = (state: RootState): Ast => state.editor.ast;
export const selectIsTreeView = (state: RootState): boolean =>
  state.editor.isTreeView;
export const selectIsLoading = (state: RootState): boolean =>
  state.editor.isLoading;

export default editorSlice.reducer;
