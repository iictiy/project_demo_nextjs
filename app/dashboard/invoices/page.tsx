import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Search from "@/app/ui/search";
import React, { Suspense } from "react";
import Table from "@/app/ui/invoices/table";
import Pagination from "@/app/ui/invoices/pagination";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton, TableRowSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredInvoices } from "@/app/lib/data";

interface PageProps {
  params: Promise<{}>;
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}
export default async function page(props: PageProps) {
  console.log("props", props);
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  // parseInt解析字符串为整数，第二个参数为基数，默认为10, 还可以解析二进制、八进制、十六进制等
  const currentPage = parseInt(searchParams?.page || "1", 10);
  console.log('currentpage', currentPage);
  
  // const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search for invoices..." />
        <CreateInvoice />
      </div>
      <div className="mt-5">
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={10} />
      </div>
    </div>
  );
}
