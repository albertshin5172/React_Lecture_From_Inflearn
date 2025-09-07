import useSWR from "swr";
import MainLayout from "../layouts/MainLayout";
import fetcher from "../lib/fetcher";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import styled from "styled-components";
import deleteSurvey from "../services/deleteSurvey";

const PAGE_SIZE = 20;

// const columns = [
//   {
//     title: "Number",
//     dataIndex: "id",
//     key: "id",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     key: "title",
//   },
//   {
//     title: "Create Date",
//     dataIndex: "createdAt",
//     key: "createdAt",
//     render: (createdAt) => {
//       const time = new Date(createdAt);

//       //return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getTime()}`;
//       return time.toLocaleDateString("ko-KR");
//     },
//   },
//   {
//     title: "Action",
//     dataIndex: "key",
//     key: "action",
//     render: (id) => {
//       return (
//         <button
//           onClick={() => {
//             console.log(id, "삭제");
//           }}
//         >
//           삭제
//         </button>
//       );
//     },
//   },
// ];

function ListPage() {
  const { data, error, mutate } = useSWR(
    "/surveys?_sort=id&_order=desc",
    fetcher
  );
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const columns = useMemo(
    () => [
      {
        title: "번호",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "제목",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "생성일",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (createdAt) => {
          const time = new Date(createdAt);

          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: "액션",
        dataIndex: "id",
        key: "action",
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                deleteSurvey(id).then(() => mutate());

                e.stopPropagation();
                e.preventDefault();
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate]
  );

  console.log("data", data);

  if (error) {
    return "error";
  }

  if (!data) {
    return "loading...";
  }

  return (
    <MainLayout selectedKeys={["list"]}>
      <CreateButtonWrapper>
        <Button onClick={() => navigate("/builder")}>
          새로운 설문조사 생성
        </Button>
      </CreateButtonWrapper>
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

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;

export default ListPage;
