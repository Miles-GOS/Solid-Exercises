export interface Printer {
  print(document: string): void;
}

export interface Scanner {
  scan(document: string): void;
}

export interface Fax {
  fax(document: string): void;
}

export class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
