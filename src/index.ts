const PLUGIN_TAG = '[CircuitJS1]';
const IFRAME_ID = 'circuitjs1-sim';

export function activate(_status?: 'onStartupFinished', _arg?: string): void {}

// 打开仿真器 iframe 窗口
export async function openSimulator(): Promise<void> {
	try {
		await eda.sys_IFrame.openIFrame('/iframe/index.html', 1200, 800, IFRAME_ID, {
			title: 'CircuitJS1',
			maximizeButton: true,
			minimizeButton: true,
		});
	}
	catch (err) {
		console.error(PLUGIN_TAG, 'openSimulator error:', err);
	}
}

export function about(): void {
	eda.sys_Dialog.showInformationMessage(
		eda.sys_I18n.text('CircuitJS1-EasyEDA v', undefined, undefined, extensionConfig.version),
		eda.sys_I18n.text('About'),
	);
}
