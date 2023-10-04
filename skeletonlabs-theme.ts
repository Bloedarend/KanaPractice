import { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const theme: CustomThemeConfig = {
    name: 'skeletonlabs-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ffd9c2
		"--color-primary-50": "255 249 246", // #fff9f6
		"--color-primary-100": "255 247 243", // #fff7f3
		"--color-primary-200": "255 246 240", // #fff6f0
		"--color-primary-300": "255 240 231", // #fff0e7
		"--color-primary-400": "255 228 212", // #ffe4d4
		"--color-primary-500": "255 217 194", // #ffd9c2
		"--color-primary-600": "230 195 175", // #e6c3af
		"--color-primary-700": "191 163 146", // #bfa392
		"--color-primary-800": "153 130 116", // #998274
		"--color-primary-900": "125 106 95", // #7d6a5f
		// secondary | #a77151
		"--color-secondary-50": "242 234 229", // #f2eae5
		"--color-secondary-100": "237 227 220", // #ede3dc
		"--color-secondary-200": "233 220 212", // #e9dcd4
		"--color-secondary-300": "220 198 185", // #dcc6b9
		"--color-secondary-400": "193 156 133", // #c19c85
		"--color-secondary-500": "167 113 81", // #a77151
		"--color-secondary-600": "150 102 73", // #966649
		"--color-secondary-700": "125 85 61", // #7d553d
		"--color-secondary-800": "100 68 49", // #644431
		"--color-secondary-900": "82 55 40", // #523728
		// tertiary | #523a2b
		"--color-tertiary-50": "229 225 223", // #e5e1df
		"--color-tertiary-100": "220 216 213", // #dcd8d5
		"--color-tertiary-200": "212 206 202", // #d4ceca
		"--color-tertiary-300": "186 176 170", // #bab0aa
		"--color-tertiary-400": "134 117 107", // #86756b
		"--color-tertiary-500": "82 58 43", // #523a2b
		"--color-tertiary-600": "74 52 39", // #4a3427
		"--color-tertiary-700": "62 44 32", // #3e2c20
		"--color-tertiary-800": "49 35 26", // #31231a
		"--color-tertiary-900": "40 28 21", // #281c15
		// success | #a9daad
		"--color-success-50": "242 249 243", // #f2f9f3
		"--color-success-100": "238 248 239", // #eef8ef
		"--color-success-200": "234 246 235", // #eaf6eb
		"--color-success-300": "221 240 222", // #ddf0de
		"--color-success-400": "195 229 198", // #c3e5c6
		"--color-success-500": "169 218 173", // #a9daad
		"--color-success-600": "152 196 156", // #98c49c
		"--color-success-700": "127 164 130", // #7fa482
		"--color-success-800": "101 131 104", // #658368
		"--color-success-900": "83 107 85", // #536b55
		// warning | #fff59e
		"--color-warning-50": "255 254 240", // #fffef0
		"--color-warning-100": "255 253 236", // #fffdec
		"--color-warning-200": "255 253 231", // #fffde7
		"--color-warning-300": "255 251 216", // #fffbd8
		"--color-warning-400": "255 248 187", // #fff8bb
		"--color-warning-500": "255 245 158", // #fff59e
		"--color-warning-600": "230 221 142", // #e6dd8e
		"--color-warning-700": "191 184 119", // #bfb877
		"--color-warning-800": "153 147 95", // #99935f
		"--color-warning-900": "125 120 77", // #7d784d
		// error | #ed514a
		"--color-error-50": "252 229 228", // #fce5e4
		"--color-error-100": "251 220 219", // #fbdcdb
		"--color-error-200": "251 212 210", // #fbd4d2
		"--color-error-300": "248 185 183", // #f8b9b7
		"--color-error-400": "242 133 128", // #f28580
		"--color-error-500": "237 81 74", // #ed514a
		"--color-error-600": "213 73 67", // #d54943
		"--color-error-700": "178 61 56", // #b23d38
		"--color-error-800": "142 49 44", // #8e312c
		"--color-error-900": "116 40 36", // #742824
		// surface | #5a5a50
		"--color-surface-50": "230 230 229", // #e6e6e5
		"--color-surface-100": "222 222 220", // #dededc
		"--color-surface-200": "214 214 211", // #d6d6d3
		"--color-surface-300": "189 189 185", // #bdbdb9
		"--color-surface-400": "140 140 133", // #8c8c85
		"--color-surface-500": "90 90 80", // #5a5a50
		"--color-surface-600": "81 81 72", // #515148
		"--color-surface-700": "68 68 60", // #44443c
		"--color-surface-800": "54 54 48", // #363630
		"--color-surface-900": "44 44 39", // #2c2c27
	},
};