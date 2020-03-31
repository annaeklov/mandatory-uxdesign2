import { BehaviorSubject } from "rxjs";

export const result$ = new BehaviorSubject(
  JSON.parse(localStorage.getItem("result"))
);

export function updateResultInLocalStorage(newResult) {
  if (newResult) {
    localStorage.setItem("result", JSON.stringify(newResult));
  } else {
    localStorage.removeItem("result");
  }
  result$.next(newResult);
}
