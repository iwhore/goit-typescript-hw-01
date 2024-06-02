type Details = {
  createAt: Date;
  updateAt: Date;
};

type Page = {
  title: string;
  likes: number;
  accoutns: string[];
  status: string;
  details?: Details;
};
