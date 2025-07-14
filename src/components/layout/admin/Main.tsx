import React from 'react'
import { FaBox, FaChartLine, FaUsers } from 'react-icons/fa';

function Main() {
  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="تعداد سفارشات"
          value="32"
          icon={<FaBox className="text-blue-500" />}
        />
        <Card
          title="کاربران جدید"
          value="12"
          icon={<FaUsers className="text-green-500" />}
        />
        <Card
          title="درآمد امروز"
          value="2,150,000 تومان"
          icon={<FaChartLine className="text-purple-500" />}


        />
        <Card
          title="بازدید امروز"
          value="845"
          icon={<FaChartLine className="text-orange-500" />}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-lg font-semibold text-gray-800">{value}</div>
      </div>
    </div>
  );
}

export default Main

