

type RecordItem = {
    tags: string[];
    notes: string;
    tab: string;
    amount?: number; //?表示amount不是必要存在的，下面的默认值就可以不写
    createdAt?: string;
  };