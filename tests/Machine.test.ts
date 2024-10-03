import { OldFashionedPrinter } from "../Solid/4.Isp_exercise/Machine";

describe("OldFashionedPrinter", () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print a document", () => {
    const printer = new OldFashionedPrinter();
    printer.print("Document 1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Printing document: Document 1");
  });
});
