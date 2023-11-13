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
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #C7987B
		"--color-primary-50": "247 240 235", // #f7f0eb
		"--color-primary-100": "244 234 229", // #f4eae5
		"--color-primary-200": "241 229 222", // #f1e5de
		"--color-primary-300": "233 214 202", // #e9d6ca
		"--color-primary-400": "216 183 163", // #d8b7a3
		"--color-primary-500": "199 152 123", // #C7987B
		"--color-primary-600": "179 137 111", // #b3896f
		"--color-primary-700": "149 114 92", // #95725c
		"--color-primary-800": "119 91 74", // #775b4a
		"--color-primary-900": "98 74 60", // #624a3c
		// secondary | #A77151
		"--color-secondary-50": "242 234 229", // #f2eae5
		"--color-secondary-100": "237 227 220", // #ede3dc
		"--color-secondary-200": "233 220 212", // #e9dcd4
		"--color-secondary-300": "220 198 185", // #dcc6b9
		"--color-secondary-400": "193 156 133", // #c19c85
		"--color-secondary-500": "167 113 81", // #A77151
		"--color-secondary-600": "150 102 73", // #966649
		"--color-secondary-700": "125 85 61", // #7d553d
		"--color-secondary-800": "100 68 49", // #644431
		"--color-secondary-900": "82 55 40", // #523728
		// tertiary | #435065
		"--color-tertiary-50": "227 229 232", // #e3e5e8
		"--color-tertiary-100": "217 220 224", // #d9dce0
		"--color-tertiary-200": "208 211 217", // #d0d3d9
		"--color-tertiary-300": "180 185 193", // #b4b9c1
		"--color-tertiary-400": "123 133 147", // #7b8593
		"--color-tertiary-500": "67 80 101", // #435065
		"--color-tertiary-600": "60 72 91", // #3c485b
		"--color-tertiary-700": "50 60 76", // #323c4c
		"--color-tertiary-800": "40 48 61", // #28303d
		"--color-tertiary-900": "33 39 49", // #212731
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
		// surface | #20252d
		"--color-surface-50": "222 222 224", // #dedee0
		"--color-surface-100": "210 211 213", // #d2d3d5
		"--color-surface-200": "199 201 203", // #c7c9cb
		"--color-surface-300": "166 168 171", // #a6a8ab
		"--color-surface-400": "99 102 108", // #63666c
		"--color-surface-500": "32 37 45", // #20252d
		"--color-surface-600": "29 33 41", // #1d2129
		"--color-surface-700": "24 28 34", // #181c22
		"--color-surface-800": "19 22 27", // #13161b
		"--color-surface-900": "16 18 22", // #101216
	},
};