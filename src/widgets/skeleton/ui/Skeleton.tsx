import { Skeleton, ConfigProvider } from "antd";

const SkeletonComponent = () => {
  return (
    <ConfigProvider
      theme={{ components: { Skeleton: { gradientFromColor: "#1c1e29" } } }}
    >
      <div className="flex flex-col gap-y-2">
        <Skeleton.Image
          active
          className="rounded-[10px]"
          style={{ width: 300, height: 200 }}
        />
        <Skeleton.Button
          active
          className="rounded-[10px]"
          style={{ width: "100%", height: 20 }}
        />
        <Skeleton.Button
          active
          className="rounded-[10px]"
          style={{ width: "30%", height: 13 }}
        />
        <div className="w-full flex justify-between">
          <Skeleton.Avatar
            active
            className="rounded-full"
            style={{ width: 30, height: 30 }}
          />{" "}
          <Skeleton.Avatar
            active
            className="rounded-full"
            style={{ width: 30, height: 30 }}
          />{" "}
          <Skeleton.Avatar
            active
            className="rounded-full"
            style={{ width: 30, height: 30 }}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export { SkeletonComponent };
