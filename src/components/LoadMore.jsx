// "use client";

// import { fetchData } from "@/app/actions";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// import Carousel from "./Carousel";

// let page = 2;

// const LoadMore = ({ hasMorePages }) => {
//   const { ref, inView } = useInView();
//   const [data, setData] = useState([]);
//   const [hasMore, setHasMore] = useState(hasMorePages);

//   useEffect(() => {
//     if (!hasMore) return;
//     if (inView) {
//       fetchData(2).then((res) => {
//         const newData = res.items.filter(
//           (item) => Array.isArray(item.shows) && item.shows.length > 0
//         );
//         setData((prevData) => [...prevData, ...newData]);
//         setHasMore(res.has_more);
//         page++;
//       });
//     }
//   }, [inView, data]);

//   return (
//     <>
//       <section>
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "1200px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "20px",
//           }}
//         >
//           {data?.map((item, index) => (
//             <Carousel key={index} slide={item} />
//           ))}
//         </div>
//         <div ref={ref} className="loading-container">
//           <Image
//             src="/spinner.gif"
//             alt="Loading..."
//             width={56}
//             height={56}
//             className="spinner"
//           />
//           <span className="loader"></span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LoadMore;
"use client";

import { fetchData } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";

let page = 2;

const LoadMore = ({ hasMorePages }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(hasMorePages);
  const [isFetching, setIsFetching] = useState(false);

  const loadMoreData = useCallback(async () => {
    if (!hasMore || isFetching) return;

    setIsFetching(true);

    try {
      const res = await fetchData(page);
      const newData = res.items.filter(
        (item) => Array.isArray(item.shows) && item.shows.length > 0
      );

      setData((prevData) => [...prevData, ...newData]);
      setHasMore(res.has_more);
      page++;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false);
    }
  }, [hasMore, isFetching]);

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView, loadMoreData]);

  return (
    <section>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {data?.map((item, index) => (
          <Carousel key={index} slide={item} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref} className="loading-container">
          <Image
            src="/spinner.gif"
            alt="Loading..."
            width={56}
            height={56}
            className="spinner"
          />
          <span className="loader"></span>
        </div>
      )}
    </section>
  );
};

export default LoadMore;
