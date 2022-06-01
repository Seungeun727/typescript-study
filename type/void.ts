// void
// type은 있지만 값은 없는 형태임.

function returnVoid(message: string): void {
  console.log(message);

  return undefined;
}

returnVoid("no return");
