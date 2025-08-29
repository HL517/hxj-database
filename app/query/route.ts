import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'; // 或用 Prisma，文档用直连方式

export async function GET() {
  // 定义 SQL 查询
  const query = sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  // 执行查询
  const result = await query;
  // 返回 JSON 响应
  return NextResponse.json(result.rows);
}