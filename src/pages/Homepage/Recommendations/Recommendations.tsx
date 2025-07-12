
import { summaryData, salesTablesData } from './components/recommendationData';
import RecommendationsChart from './components/RecommendationsChart';
import RecommendationsTable from './components/RecommendationTable';
import SummaryCard from './components/SummaryCard';

const RecommendationsPage = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Summary Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {summaryData.map((item, index) => (
                        <SummaryCard key={index} title={item.title} value={item.value} />
                    ))}
                </div>

                {/* Sales Chart */}
                <RecommendationsChart />

                {/* Sales Tables */}
                {salesTablesData.map((table, index) => (
                    <RecommendationsTable
                        key={index}
                        title={table.title}
                        percentage={table.percentage}
                        headers={table.headers}
                        rows={table.rows}
                        total={table.total}
                    />
                ))}

            </div>
        </div>
    );
};

export default RecommendationsPage;