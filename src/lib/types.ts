export type StatusResponse = {
  status: "success" | "failed";
  reason?: string;
};

export type DataMapper<InputType, OutputType> = (i: InputType) => OutputType;
