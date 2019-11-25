export class CatDetail {
  name: string;
  type: string;
}

export class GenderCatDetail {
  maleCats: CatDetail[];
  femaleCats: CatDetail[];
}
