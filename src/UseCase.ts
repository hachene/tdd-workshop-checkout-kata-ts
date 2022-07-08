export interface UseCase {
  perform: () => Promise<any>
}
