"""Génère les images locales utilisées par les données seeder (public/seed)."""

import math
import os
import random
import shutil

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'seed')
FONT_BOLD = os.path.join(ROOT, 'public', 'assets', 'fonts', 'SourceSans3-Bold.ttf')
FONT_REGULAR = os.path.join(ROOT, 'public', 'assets', 'fonts', 'SourceSans3-Regular.ttf')

# Doit rester synchronisé avec src/seeders/houses.ts
HOUSES = [
    ('atlas-capital', 'Atlas Capital', 'AC', ('#1E3C72', '#2A5298'), '#FCC55E'),
    ('nova-crypto', 'Nova Crypto Fund', 'NC', ('#41295A', '#2F0743'), '#C084FC'),
    ('sahel-trading', 'Sahel Trading Group', 'ST', ('#8E4A1C', '#4A2208'), '#F6AD55'),
    ('baobab-invest', 'Baobab Invest', 'BI', ('#134E3A', '#0B2E22'), '#4ADE80'),
    ('lagune-fx', 'Lagune FX', 'LF', ('#0F5E6B', '#06343B'), '#5EEAD4'),
    ('orion-quant', 'Orion Quant', 'OQ', ('#0B1437', '#1A237E'), '#60A5FA'),
    ('ivoire-gold', 'Ivoire Gold Traders', 'IG', ('#5C4813', '#2E2306'), '#FACC15'),
    ('kora-asset', 'Kora Asset Management', 'KA', ('#7F1D1D', '#3B0A0A'), '#FCA5A5'),
]

GREEN = (38, 166, 91)
RED = (234, 57, 67)


def font(size, bold=True):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, size)


def hex_to_rgb(value):
    value = value.lstrip('#')
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))


def gradient(size, start, end, horizontal=False):
    width, height = size
    start, end = hex_to_rgb(start), hex_to_rgb(end)
    img = Image.new('RGB', size)
    draw = ImageDraw.Draw(img)
    steps = width if horizontal else height
    for i in range(steps):
        ratio = i / max(steps - 1, 1)
        color = tuple(int(start[c] + (end[c] - start[c]) * ratio) for c in range(3))
        if horizontal:
            draw.line([(i, 0), (i, height)], fill=color)
        else:
            draw.line([(0, i), (width, i)], fill=color)
    return img


def random_walk(rnd, count, drift=0.4, volatility=2.5, start=100.0):
    values = [start]
    for _ in range(count - 1):
        values.append(max(5, values[-1] + rnd.gauss(drift, volatility)))
    return values


def scale_points(values, box):
    x0, y0, x1, y1 = box
    low, high = min(values), max(values)
    span = (high - low) or 1
    step = (x1 - x0) / max(len(values) - 1, 1)
    return [(x0 + i * step, y1 - (v - low) / span * (y1 - y0)) for i, v in enumerate(values)]


def save(img, path, quality=85):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img = img.convert('RGB')
    if path.endswith('.png'):
        img.save(path, optimize=True)
    else:
        img.save(path, quality=quality, optimize=True)


def draw_logo(slug, initials, colors, accent):
    size = 256
    img = gradient((size, size), *colors)
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size, size], radius=56, fill=255)
    logo = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    logo.paste(img, (0, 0), mask)
    draw = ImageDraw.Draw(logo)
    draw.line([(40, 190), (95, 150), (140, 168), (215, 80)], fill=accent, width=12, joint='curve')
    f = font(96)
    bbox = draw.textbbox((0, 0), initials, font=f)
    draw.text(((size - (bbox[2] - bbox[0])) / 2, 40), initials, font=f, fill='white')
    os.makedirs(os.path.join(OUT, 'houses'), exist_ok=True)
    logo.save(os.path.join(OUT, 'houses', f'{slug}-logo.png'), optimize=True)


def draw_cover(slug, name, colors, accent, seed):
    rnd = random.Random(seed)
    w, h = 1200, 500
    img = gradient((w, h), colors[0], colors[1], horizontal=True).convert('RGBA')
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for x in range(0, w, 80):
        draw.line([(x, 0), (x, h)], fill=(255, 255, 255, 18))
    for y in range(0, h, 80):
        draw.line([(0, y), (w, y)], fill=(255, 255, 255, 18))
    points = scale_points(random_walk(rnd, 60, 0.8, 3), (0, 120, w, h - 40))
    draw.polygon(points + [(w, h), (0, h)], fill=(*hex_to_rgb(accent), 50))
    draw.line(points, fill=(*hex_to_rgb(accent), 255), width=6)
    img = Image.alpha_composite(img, overlay)
    save(img, os.path.join(OUT, 'houses', f'{slug}-cover.jpg'))


def draw_card(slug, name, initials, colors, accent, seed):
    """Vignette carrée affichée dans le carrousel mobile de l'accueil."""
    rnd = random.Random(seed)
    size = 600
    img = gradient((size, size), colors[0], colors[1]).convert('RGBA')
    overlay = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for _ in range(10):
        radius = rnd.randint(30, 140)
        x, y = rnd.randint(0, size), rnd.randint(0, size)
        draw.ellipse([x - radius, y - radius, x + radius, y + radius],
                     fill=(255, 255, 255, rnd.randint(10, 30)))
    points = scale_points(random_walk(rnd, 30, 0.9, 2.5), (0, 450, size, 580))
    draw.polygon(points + [(size, size), (0, size)], fill=(*hex_to_rgb(accent), 60))
    draw.line(points, fill=(*hex_to_rgb(accent), 255), width=8)
    img = Image.alpha_composite(img, overlay)

    logo = Image.open(os.path.join(OUT, 'houses', f'{slug}-logo.png')).resize((190, 190))
    img.alpha_composite(logo, ((size - 190) // 2, 70))

    draw = ImageDraw.Draw(img)
    words = name.upper().split()
    lines = [' '.join(words[:2]), ' '.join(words[2:])] if len(words) > 2 else [' '.join(words)]
    y = 285
    for line in lines:
        f = font(64)
        while draw.textlength(line, font=f) > size - 60:
            f = font(f.size - 4)
        x = (size - draw.textlength(line, font=f)) / 2
        draw.text((x + 4, y + 4), line, font=f, fill=(0, 0, 0, 150))
        draw.text((x, y), line, font=f, fill=accent)
        y += f.size + 6
    save(img, os.path.join(OUT, 'houses', f'{slug}-card.jpg'))


def screenshot_frame(name, title, accent):
    w, h = 1280, 800
    img = Image.new('RGB', (w, h), (17, 22, 35))
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, w, 64], fill=(24, 30, 48))
    draw.text((28, 16), name, font=font(28), fill=accent)
    draw.text((w - 28 - draw.textlength(title, font=font(22, False)), 22), title,
              font=font(22, False), fill=(170, 178, 196))
    return img, draw


def draw_candles(slug, name, accent, seed):
    rnd = random.Random(seed)
    img, draw = screenshot_frame(name, 'Graphique XAU/USD — H4', accent)
    box = (60, 100, 1220, 620)
    for y in range(box[1], box[3] + 1, 65):
        draw.line([(box[0], y), (box[2], y)], fill=(36, 44, 66))
    price, candles = 100.0, []
    for _ in range(58):
        open_ = price
        close = open_ + rnd.gauss(0.35, 2.2)
        high = max(open_, close) + abs(rnd.gauss(0, 1.2))
        low = min(open_, close) - abs(rnd.gauss(0, 1.2))
        candles.append((open_, high, low, close))
        price = close
    low_all = min(c[2] for c in candles)
    high_all = max(c[1] for c in candles)
    to_y = lambda v: box[3] - (v - low_all) / (high_all - low_all) * (box[3] - box[1])
    step = (box[2] - box[0]) / len(candles)
    for i, (o, hi, lo, c) in enumerate(candles):
        x = box[0] + i * step + step / 2
        color = GREEN if c >= o else RED
        draw.line([(x, to_y(hi)), (x, to_y(lo))], fill=color, width=2)
        top, bottom = sorted([to_y(o), to_y(c)])
        draw.rectangle([x - step * 0.32, top, x + step * 0.32, max(bottom, top + 2)], fill=color)
    for i in range(len(candles)):
        x = box[0] + i * step + step / 2
        vol = rnd.randint(20, 110)
        color = GREEN if candles[i][3] >= candles[i][0] else RED
        draw.rectangle([x - step * 0.32, 760 - vol, x + step * 0.32, 760], fill=(*color,))
    draw.text((60, 640), 'Volume', font=font(20, False), fill=(120, 130, 150))
    save(img, os.path.join(OUT, 'houses', f'{slug}-shot-1.jpg'))


def draw_equity(slug, name, accent, seed):
    rnd = random.Random(seed)
    img, draw = screenshot_frame(name, 'Courbe de capital — 12 mois', accent)
    cards = [('Capital', f'{rnd.randint(120, 950)} M FCFA'), ('Gain total', f'+{rnd.randint(18, 64)} %'),
             ('Taux de gain', f'{rnd.randint(58, 84)} %'), ('Drawdown max', f'-{rnd.randint(4, 22)} %')]
    for i, (label, value) in enumerate(cards):
        x = 40 + i * 305
        draw.rounded_rectangle([x, 90, x + 285, 200], radius=16, fill=(26, 33, 52))
        draw.text((x + 20, 105), label, font=font(22, False), fill=(150, 160, 180))
        color = GREEN if value.startswith('+') else (RED if value.startswith('-') else (255, 255, 255))
        draw.text((x + 20, 140), value, font=font(36), fill=color)
    box = (60, 240, 1220, 760)
    for y in range(box[1], box[3] + 1, 65):
        draw.line([(box[0], y), (box[2], y)], fill=(36, 44, 66))
    points = scale_points(random_walk(rnd, 120, 0.6, 2.4), box)
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    ImageDraw.Draw(overlay).polygon(points + [(box[2], box[3]), (box[0], box[3])],
                                    fill=(*hex_to_rgb(accent), 45))
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    ImageDraw.Draw(img).line(points, fill=hex_to_rgb(accent), width=5)
    save(img, os.path.join(OUT, 'houses', f'{slug}-shot-2.jpg'))


def draw_history(slug, name, accent, seed):
    rnd = random.Random(seed)
    img, draw = screenshot_frame(name, 'Historique des positions', accent)
    headers = ['Date', 'Actif', 'Sens', 'Entrée', 'Sortie', 'Résultat']
    columns = [40, 260, 470, 640, 850, 1060]
    draw.rectangle([20, 84, 1260, 134], fill=(26, 33, 52))
    for x, label in zip(columns, headers):
        draw.text((x, 96), label, font=font(22), fill=(170, 178, 196))
    assets = ['EUR/USD', 'XAU/USD', 'BTC/USD', 'GBP/JPY', 'US30', 'ETH/USD', 'USD/XOF', 'Brent']
    for row in range(11):
        y = 150 + row * 56
        if row % 2:
            draw.rectangle([20, y - 8, 1260, y + 44], fill=(21, 27, 43))
        entry = rnd.uniform(1, 2500)
        result = rnd.gauss(1.2, 2.5)
        values = [f'{rnd.randint(1, 28):02d}/09/2026', rnd.choice(assets),
                  rnd.choice(['Achat', 'Vente']), f'{entry:,.2f}',
                  f'{entry * (1 + result / 100):,.2f}', f'{result:+.2f} %']
        for i, (x, value) in enumerate(zip(columns, values)):
            color = (230, 234, 242)
            if i == 5:
                color = GREEN if result >= 0 else RED
            draw.text((x, y), value, font=font(22, i == 5), fill=color)
    save(img, os.path.join(OUT, 'houses', f'{slug}-shot-3.jpg'))


def draw_allocation(slug, name, accent, seed):
    rnd = random.Random(seed)
    img, draw = screenshot_frame(name, 'Répartition du portefeuille', accent)
    parts = [rnd.randint(10, 40) for _ in range(5)]
    total = sum(parts)
    labels = ['Forex', 'Matières premières', 'Indices', 'Crypto', 'Liquidités']
    palette = [hex_to_rgb(accent), (96, 165, 250), (74, 222, 128), (192, 132, 252), (148, 163, 184)]
    center, radius = (380, 440), 260
    angle = -90
    for value, color in zip(parts, palette):
        sweep = value / total * 360
        draw.pieslice([center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius],
                      angle, angle + sweep, fill=color)
        angle += sweep
    draw.ellipse([center[0] - 140, center[1] - 140, center[0] + 140, center[1] + 140], fill=(17, 22, 35))
    draw.text((center[0] - 70, center[1] - 30), f'{len(parts)} marchés', font=font(30), fill='white')
    for i, (label, value, color) in enumerate(zip(labels, parts, palette)):
        y = 220 + i * 90
        draw.rounded_rectangle([760, y, 800, y + 40], radius=8, fill=color)
        draw.text((830, y), label, font=font(30, False), fill=(230, 234, 242))
        draw.text((1130, y), f'{value / total * 100:.0f} %', font=font(30), fill='white')
    save(img, os.path.join(OUT, 'houses', f'{slug}-shot-4.jpg'))


def draw_avatars():
    palette = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#00B894',
               '#E17055', '#0984E3', '#FD79A8', '#55EFC4', '#A29BFE']
    for i in range(1, 26):
        img = gradient((200, 200), palette[i % len(palette)], '#2D3436')
        draw = ImageDraw.Draw(img)
        draw.ellipse([60, 35, 140, 115], fill=(255, 255, 255))
        draw.ellipse([30, 120, 170, 260], fill=(255, 255, 255))
        save(img, os.path.join(OUT, 'avatars', f'avatar_{i}.jpg'))


def main():
    for folder in ('games', 'categories', 'play', 'houses'):
        shutil.rmtree(os.path.join(OUT, folder), ignore_errors=True)
    for index, (slug, name, initials, colors, accent) in enumerate(HOUSES):
        draw_logo(slug, initials, colors, accent)
        draw_cover(slug, name, colors, accent, index)
        draw_card(slug, name, initials, colors, accent, index + 100)
        draw_candles(slug, name, hex_to_rgb(accent), index * 10 + 1)
        draw_equity(slug, name, accent, index * 10 + 2)
        draw_history(slug, name, hex_to_rgb(accent), index * 10 + 3)
        draw_allocation(slug, name, accent, index * 10 + 4)
    draw_avatars()


if __name__ == '__main__':
    main()
