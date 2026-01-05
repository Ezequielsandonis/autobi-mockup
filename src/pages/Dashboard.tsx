import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import ContentWrapper from "../components/visual/ContentWrapper";

export const Dashboard = () => {
    // Datos dummy estáticos
    const stats = [
        { label: "Total Users", value: "2,543", icon: "pi-users", color: "from-blue-500 to-blue-600", change: "+12.5%" },
        { label: "Revenue", value: "$45.2K", icon: "pi-dollar", color: "from-green-500 to-green-600", change: "+8.3%" },
        { label: "Active Orders", value: "128", icon: "pi-shopping-cart", color: "from-yellow-500 to-yellow-600", change: "-3.1%" },
        { label: "Conversion", value: "3.2%", icon: "pi-chart-line", color: "from-purple-500 to-purple-600", change: "+1.2%" },
    ];

    const recentActivity = [
        { user: "John Doe", action: "completed a purchase", time: "2 min ago", icon: "pi-check-circle", color: "text-green-500" },
        { user: "Jane Smith", action: "signed up", time: "15 min ago", icon: "pi-user-plus", color: "text-blue-500" },
        { user: "Mike Johnson", action: "left a review", time: "1 hour ago", icon: "pi-star", color: "text-yellow-500" },
        { user: "Sarah Wilson", action: "contacted support", time: "2 hours ago", icon: "pi-comment", color: "text-purple-500" },
    ];

    const tableData = [
        { id: "#2543", customer: "Alice Brown", status: "Completed", amount: "$234.00", date: "Jan 5, 2026" },
        { id: "#2542", customer: "Bob Green", status: "Pending", amount: "$125.50", date: "Jan 5, 2026" },
        { id: "#2541", customer: "Charlie White", status: "Completed", amount: "$456.00", date: "Jan 4, 2026" },
        { id: "#2540", customer: "Diana Black", status: "Cancelled", amount: "$89.00", date: "Jan 4, 2026" },
        { id: "#2539", customer: "Evan Gray", status: "Completed", amount: "$312.00", date: "Jan 3, 2026" },
    ];

    const quickActions = [
        { label: "New Order", icon: "pi pi-plus", color: "p-button-success" },
        { label: "Reports", icon: "pi pi-chart-bar", color: "p-button-info" },
        { label: "Settings", icon: "pi pi-cog", color: "p-button-warning" },
        { label: "Export Data", icon: "pi pi-download", color: "p-button-help" },
    ];

    return (
        <ContentWrapper>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                    <p className="text-gray-600">Welcome back! Here's what's happening today 📊</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <Card key={index} className={`shadow-md bg-gradient-to-br ${stat.color} text-white`}>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <i className={`pi ${stat.icon} text-2xl opacity-90`} />
                                    <span className={`text-sm font-semibold px-2 py-1 rounded ${stat.change.startsWith('+') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="text-sm opacity-90">{stat.label}</div>
                                <div className="text-3xl font-bold">{stat.value}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Quick Actions */}
                <Card title="Quick Actions" className="shadow-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {quickActions.map((action, index) => (
                            <Button
                                key={index}
                                label={action.label}
                                icon={action.icon}
                                className={`${action.color} w-full h-20 flex-column`}
                            />
                        ))}
                    </div>
                </Card>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Recent Activity */}
                    <Card title="Recent Activity" className="shadow-md lg:col-span-1">
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                                    <i className={`pi ${activity.icon} ${activity.color} text-xl mt-1`} />
                                    <div className="flex-1">
                                        <p className="text-sm">
                                            <span className="font-semibold">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Performance Chart (Mock) */}
                    <Card title="Performance Overview" className="shadow-md lg:col-span-2">
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold">Sales</span>
                                    <span className="text-sm text-gray-600">75%</span>
                                </div>
                                <ProgressBar value={75} showValue={false} style={{ height: "8px" }} />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold">Traffic</span>
                                    <span className="text-sm text-gray-600">60%</span>
                                </div>
                                <ProgressBar value={60} showValue={false} style={{ height: "8px" }} color="#10b981" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold">Engagement</span>
                                    <span className="text-sm text-gray-600">85%</span>
                                </div>
                                <ProgressBar value={85} showValue={false} style={{ height: "8px" }} color="#f59e0b" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold">Customer Satisfaction</span>
                                    <span className="text-sm text-gray-600">92%</span>
                                </div>
                                <ProgressBar value={92} showValue={false} style={{ height: "8px" }} color="#8b5cf6" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Recent Orders Table */}
                <Card title="Recent Orders" className="shadow-md">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-2 font-semibold text-sm">Order ID</th>
                                    <th className="text-left py-3 px-2 font-semibold text-sm">Customer</th>
                                    <th className="text-left py-3 px-2 font-semibold text-sm">Status</th>
                                    <th className="text-left py-3 px-2 font-semibold text-sm">Amount</th>
                                    <th className="text-left py-3 px-2 font-semibold text-sm">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-2 text-sm font-medium">{row.id}</td>
                                        <td className="py-3 px-2 text-sm">{row.customer}</td>
                                        <td className="py-3 px-2 text-sm">
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-semibold ${row.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : row.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-sm font-semibold">{row.amount}</td>
                                        <td className="py-3 px-2 text-sm text-gray-600">{row.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button label="View All Orders" icon="pi pi-arrow-right" className="p-button-text p-button-sm" />
                    </div>
                </Card>

                {/* Bottom Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card title="System Status" className="shadow-md">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Server Status:</span>
                                <span className="font-semibold text-green-600">Online ✅</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Last Backup:</span>
                                <span className="font-semibold">2 hours ago</span>
                            </div>
                            <div className="flex justify-between">
                                <span>API Response Time:</span>
                                <span className="font-semibold">124ms</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Storage Used:</span>
                                <span className="font-semibold">42.3 GB / 100 GB</span>
                            </div>
                        </div>
                    </Card>

                    <Card title="Quick Tips" className="shadow-md">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <i className="pi pi-lightbulb text-yellow-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Optimize your workflow</p>
                                    <p className="text-gray-600 text-xs">Use keyboard shortcuts to work faster</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="pi pi-bell text-blue-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Enable notifications</p>
                                    <p className="text-gray-600 text-xs">Stay updated with real-time alerts</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="pi pi-shield text-green-500 mt-1" />
                                <div>
                                    <p className="font-semibold">Security update available</p>
                                    <p className="text-gray-600 text-xs">Keep your system secure with the latest patches</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </ContentWrapper>
    );
};