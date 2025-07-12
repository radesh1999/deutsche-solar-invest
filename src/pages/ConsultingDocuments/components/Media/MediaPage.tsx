import VideoPlayerSection from './VideoPlayer';
import { videoPlayerInfo } from './consultingMock';
import DocumentList from './DocumentList';

const MediaPage: React.FC = () => {
    return (
        <div className="bg-[#EBECF0] min-h-screen font-sans">
            <div className="grid lg:grid-cols-3 mg:grid-cols-1 gap-6 items-start">
                <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 lg:col-span-1 lg:order-1 md:order-2 sm:order-2 h-full">
                    <div className="h-full bg-white rounded-md shadow-sm">
                        <DocumentList />
                    </div>
                    <div className="bg-[#005738] text-white h-full p-6 rounded-lg hidden lg:hidden sm:block md:block shadow-md space-y-4 text-sm">
                        {videoPlayerInfo.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2 md:order-1 sm:order-1 h-full">
                    <div className="h-full bg-white rounded-md shadow-sm">
                        <div className="bg-[#005738] text-white p-6 rounded-lg shadow-lg">
                            <VideoPlayerSection />
                            <div className="lg:block md:hidden sm:hidden space-y-4 text-sm">
                                {videoPlayerInfo.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MediaPage;
