function process(val: unknown) {
  // unknown is likely any but it forces you to check or validate the value before using it
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
