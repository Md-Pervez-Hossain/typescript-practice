export interface isPlayer {
  name: string;
  readonly country: string;
  play(): void;
  getAge(): number;
}
