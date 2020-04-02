import { BehaviorSubject } from "rxjs";

export const result$ = new BehaviorSubject(
  JSON.parse(localStorage.getItem("result"))
);

export function updateResultInLocalStorage(statsResult) {
  if (statsResult) {
    localStorage.setItem("result", JSON.stringify(statsResult));
  } else {
    localStorage.removeItem("result");
  }
  result$.next(statsResult);
}
