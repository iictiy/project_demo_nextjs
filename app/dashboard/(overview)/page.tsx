import { lusitana } from "@/app/ui/fonts";
import CardWrapper, { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";

export default async function pages() {
  // const revenue = await fetchRevenue();
  // const Latest = await fetchLatestInvoices();
  // const {
  //   numberOfCustomers, // 人员数量总数
  //   numberOfInvoices, // 发票数量总数
  //   totalPaidInvoices, // 已支付发票金额总数
  //   totalPendingInvoices, // 待支付发票金额总数
  // } = await fetchCardData();

  // console.log("process.env.POSTGRES_URL", process.env);
  // console.log("fetchCardData", await fetchCardData());

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      {/* <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8"> */}
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
