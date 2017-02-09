export class Movie {
  constructor(
    public id: number,
    public name: string,
    public location: string[],
    public author: string,
    public lat: number,
    public lng: number
  ) { }
}
