import useSWR from "swr";
import MainLayout from "../layouts/MainLayout";
import fetcher from "../lib/fetcher";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PAGE_SIZE = 20;

const columns = [
  {
    title: "Number",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Create Date",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (createdAt) => {
      const time = new Date(createdAt);

      //return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getTime()}`;
      return time.toLocaleDateString("ko-KR");
    },
  },
  {
    title: "Action",
    dataIndex: "key",
    key: "action",
    render: (id) => {
      return (
        <button
          onClick={() => {
            console.log(id, "삭제");
          }}
        >
          삭제
        </button>
      );
    },
  },
];

function ListPage() {
  const { data, error } = useSWR("/surveys", fetcher);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  console.log("data", data);

  if (error) {
    return "error";
  }

  if (!data) {
    return "loading...";
  }

  return (
    <MainLayout selectedKeys={["list"]}>
      <Table
        onRow={(record) => {
          return {
            onClick: (event) => {
              console.log("onClick", record.id); // click row
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          console.log(pagination);
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      ></Table>
    </MainLayout>
  );
}

export default ListPage;
