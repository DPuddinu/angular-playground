import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { Errored, Loaded, Loading, LoadingState } from '../types/loading.type';

export function toLoadingStateStream<T>( source$: Observable<T> ): Observable<LoadingState<T>> {
  return source$.pipe(
    map((data) => ({ state: 'loaded', data } as Loaded<T>)),
    catchError((error) => of({ state: 'error', error } as Errored)),
    startWith({ state: 'loading' } as Loading)
  );
}
