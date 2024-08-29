import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export function Resizeable() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border md:min-w-[300px]"
        >
            <ResizablePanel
                className="bg-popover-foreground text-popover"
                defaultSize={50}
            >
                <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">Design</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel
                        className="bg-popover text-popover-foreground"
                        defaultSize={40}
                    >
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">
                                Acessibilidade
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel
                        className="bg-accent text-primary"
                        defaultSize={60}
                    >
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">
                                Interatividade
                            </span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
