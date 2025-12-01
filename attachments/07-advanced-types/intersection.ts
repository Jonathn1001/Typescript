type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionURL: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errMsg: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;
