#!/usr/bin/env python3
"""Rebuild the Japanese subset font after adding Japanese text to the site.

Usage (needs: pip install fonttools brotli):
  python3 scripts/make_ja_font.py /path/to/NotoSansJP-Bold.ttf

Get the full font (OFL) e.g. from npm:  npm pack @expo-google-fonts/noto-sans-jp
(file 700Bold/NotoSansJP_700Bold.ttf). Writes src/assets/fonts/noto-sans-jp-ja-700.woff2
containing only the Japanese characters used in src/, plus ja-chars.txt listing them.
scripts/build-fonts.mjs fails the build if the source uses a character not in the subset.
"""
import pathlib, re, subprocess, sys
src = pathlib.Path('src')
chars = set()
for p in src.rglob('*'):
    if p.suffix in {'.astro', '.md', '.mjs', '.ts'}:
        chars.update(c for c in p.read_text(encoding='utf-8') if re.match(r'[　-鿿＀-￯]', c))
text = ''.join(sorted(chars))
out = pathlib.Path('src/assets/fonts')
out.mkdir(parents=True, exist_ok=True)
(out / 'ja-chars.txt').write_text(text, encoding='utf-8')
subprocess.run([sys.executable, '-m', 'fontTools.subset', sys.argv[1], f'--text={text}', '--flavor=woff2',
                '--layout-features=*', '--no-hinting', '--desubroutinize', f'--output-file={out / "noto-sans-jp-ja-700.woff2"}'], check=True)
print(f'{len(text)} characters -> {out / "noto-sans-jp-ja-700.woff2"} ({(out / "noto-sans-jp-ja-700.woff2").stat().st_size // 1024} KB)')
