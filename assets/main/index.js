System.register("chunks:///_virtual/ArcTextMesh.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Enum, JsonAsset, Texture2D, Material, Color, Layers, MeshRenderer, Vec3, gfx, Mesh, math, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      JsonAsset = module.JsonAsset;
      Texture2D = module.Texture2D;
      Material = module.Material;
      Color = module.Color;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      Vec3 = module.Vec3;
      gfx = module.gfx;
      Mesh = module.Mesh;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;
      cclegacy._RF.push({}, "28184xX3rNPcJTTJ6RRKcou", "ArcTextMesh", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        disallowMultiple = _decorator.disallowMultiple;
      var ArcPlane = /*#__PURE__*/function (ArcPlane) {
        ArcPlane[ArcPlane["XY"] = 0] = "XY";
        ArcPlane[ArcPlane["XZ"] = 1] = "XZ";
        ArcPlane[ArcPlane["YZ"] = 2] = "YZ";
        return ArcPlane;
      }(ArcPlane || {});
      Enum(ArcPlane);
      var ArcAlign = /*#__PURE__*/function (ArcAlign) {
        ArcAlign[ArcAlign["Left"] = 0] = "Left";
        ArcAlign[ArcAlign["Center"] = 1] = "Center";
        ArcAlign[ArcAlign["Right"] = 2] = "Right";
        return ArcAlign;
      }(ArcAlign || {});
      Enum(ArcAlign);
      var ArcBend = /*#__PURE__*/function (ArcBend) {
        ArcBend[ArcBend["Convex"] = 1] = "Convex";
        ArcBend[ArcBend["Concave"] = -1] = "Concave";
        return ArcBend;
      }(ArcBend || {});
      Enum(ArcBend);
      var BendMode = /*#__PURE__*/function (BendMode) {
        BendMode[BendMode["Radius"] = 0] = "Radius";
        BendMode[BendMode["ArcAngle"] = 1] = "ArcAngle";
        return BendMode;
      }(BendMode || {});
      Enum(BendMode);
      var ArcTextMSDFTwoLinesSubmesh = exports('ArcTextMSDFTwoLinesSubmesh', (_dec = ccclass('ArcTextMSDFTwoLinesSubmesh'), _dec2 = executeInEditMode(), _dec3 = disallowMultiple(), _dec4 = property({
        tooltip: 'В редакторе автоматически пересобирать при изменении свойств'
      }), _dec5 = property({
        tooltip: 'В рантайме собрать в start()'
      }), _dec6 = property({
        tooltip: 'После сборки отключить компонент (0 оверхеда)'
      }), _dec7 = property({
        tooltip: 'Поставь true -> пересборка прямо сейчас'
      }), _dec8 = property({
        tooltip: 'Текст 1-й строки'
      }), _dec9 = property({
        type: JsonAsset
      }), _dec10 = property({
        type: Texture2D
      }), _dec11 = property({
        type: Material
      }), _dec12 = property({
        tooltip: 'Размер шрифта 1 (px→мир)'
      }), _dec13 = property({
        tooltip: 'Шаг 1 (xadvance множитель)'
      }), _dec14 = property({
        type: Color
      }), _dec15 = property({
        tooltip: 'Текст 2-й строки'
      }), _dec16 = property({
        type: JsonAsset
      }), _dec17 = property({
        type: Texture2D
      }), _dec18 = property({
        type: Material
      }), _dec19 = property({
        tooltip: 'Размер шрифта 2 (px→мир)'
      }), _dec20 = property({
        tooltip: 'Шаг 2 (xadvance множитель)'
      }), _dec21 = property({
        type: Color
      }), _dec22 = property({
        type: BendMode
      }), _dec23 = property({
        type: ArcPlane
      }), _dec24 = property({
        type: ArcAlign
      }), _dec25 = property({
        type: ArcBend
      }), _dec26 = property({
        slide: true,
        range: [2, 64],
        step: 1
      }), _dec27 = property({
        slide: true,
        range: [1, 32],
        step: 1
      }), _dec28 = property({
        slide: true,
        range: [1, 128],
        step: 1
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ArcTextMSDFTwoLinesSubmesh, _Component);
        function ArcTextMSDFTwoLinesSubmesh() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // -------- редактор/рантайм поведение
          _initializerDefineProperty(_this, "editorLiveUpdate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildOnStart", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freezeAfterBuild", _descriptor3, _assertThisInitialized(_this));
          // Кнопка-переключатель в инспекторе
          _this._forceRebuild = false;
          // -------- строка 1 (верхняя)
          _initializerDefineProperty(_this, "text1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontJson1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pixelScale1", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingScale1", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color1", _descriptor10, _assertThisInitialized(_this));
          // -------- строка 2 (нижняя)
          _initializerDefineProperty(_this, "text2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontJson2", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material2", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pixelScale2", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingScale2", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color2", _descriptor17, _assertThisInitialized(_this));
          // Вертикальная дистанция между строками (мировые ед.): text1 ↑ d/2, text2 ↓ d/2
          _initializerDefineProperty(_this, "lineSpacing", _descriptor18, _assertThisInitialized(_this));
          // MSDF/UV
          _initializerDefineProperty(_this, "invertV", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorX", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorY", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPxRange", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "msdfSoftness", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "alphaClip", _descriptor24, _assertThisInitialized(_this));
          // Кривизна/раскладка
          _initializerDefineProperty(_this, "bendMode", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radius", _descriptor26, _assertThisInitialized(_this));
          // при ArcAngle может быть 0
          _initializerDefineProperty(_this, "arcAngleDeg", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "plane", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "align", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bend", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "faceOutward", _descriptor31, _assertThisInitialized(_this));
          // Сегментация (колонки)
          _initializerDefineProperty(_this, "segmentWidthPx", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minSegmentsPerGlyph", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSegmentsPerGlyph", _descriptor34, _assertThisInitialized(_this));
          // Центрирование по видимой высоте (Y для XY/XZ, Z для YZ)
          _initializerDefineProperty(_this, "centerVertByBounds", _descriptor35, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ArcTextMSDFTwoLinesSubmesh.prototype;
        // ---------- lifecycle ----------
        _proto.onLoad = function onLoad() {
          this.node.layer = 1 << Layers.Enum.DEFAULT;
          if (!this.node.getComponent(MeshRenderer)) this.node.addComponent(MeshRenderer);
        };
        _proto.start = function start() {
          if (this.buildOnStart) {
            this._rebuild();
            if (this.freezeAfterBuild) this.enabled = false;
          }
        };
        _proto.onValidate = function onValidate() {}

        // ---------- сборка: 1 меш, 1–2 сабмеша ----------
        ;

        _proto._rebuild = function _rebuild() {
          var ok1 = !!(this.text1 && this.fontJson1 && this.atlas1 && this.material1);
          var ok2 = !!(this.text2 && this.fontJson2 && this.atlas2 && this.material2);
          var mr = this.node.getComponent(MeshRenderer);
          if (!ok1 && !ok2) {
            mr.mesh = null;
            mr.materials = [];
            return;
          }
          var half = this.lineSpacing * 0.5;
          var geo1 = ok1 ? this._buildLine(this.text1, this.fontJson1, this.atlas1, this.pixelScale1, this.spacingScale1, +half) : null;
          var geo2 = ok2 ? this._buildLine(this.text2, this.fontJson2, this.atlas2, this.pixelScale2, this.spacingScale2, -half) : null;
          var canMerge = ok1 && ok2 && this.atlas1 === this.atlas2 && this.material1 === this.material2;
          var oneSub = canMerge || !ok2;
          var positions = [];
          var normals = [];
          var uvs = [];
          var indices0 = [];
          var indices1 = [];
          var minPos = new Vec3(1e9, 1e9, 1e9);
          var maxPos = new Vec3(-1e9, -1e9, -1e9);
          if (geo1) {
            positions.push.apply(positions, geo1.positions);
            normals.push.apply(normals, geo1.normals);
            uvs.push.apply(uvs, geo1.uvs);
            indices0 = geo1.indices;
            minPos.x = Math.min(minPos.x, geo1.minPos.x);
            minPos.y = Math.min(minPos.y, geo1.minPos.y);
            minPos.z = Math.min(minPos.z, geo1.minPos.z);
            maxPos.x = Math.max(maxPos.x, geo1.maxPos.x);
            maxPos.y = Math.max(maxPos.y, geo1.maxPos.y);
            maxPos.z = Math.max(maxPos.z, geo1.maxPos.z);
          }
          var vtxOffset1 = positions.length / 3;
          if (geo2) {
            positions.push.apply(positions, geo2.positions);
            normals.push.apply(normals, geo2.normals);
            uvs.push.apply(uvs, geo2.uvs);
            indices1 = geo2.indices.map(function (i) {
              return i + vtxOffset1;
            });
            minPos.x = Math.min(minPos.x, geo2.minPos.x);
            minPos.y = Math.min(minPos.y, geo2.minPos.y);
            minPos.z = Math.min(minPos.z, geo2.minPos.z);
            maxPos.x = Math.max(maxPos.x, geo2.maxPos.x);
            maxPos.y = Math.max(maxPos.y, geo2.maxPos.y);
            maxPos.z = Math.max(maxPos.z, geo2.maxPos.z);
          }

          // Центрирование по видимой высоте
          if (this.centerVertByBounds && positions.length >= 3) {
            var vIdx = this.plane === ArcPlane.YZ ? 2 : 1;
            var vMin = 1e9,
              vMax = -1e9;
            for (var i = vIdx; i < positions.length; i += 3) {
              var v = positions[i];
              if (v < vMin) vMin = v;
              if (v > vMax) vMax = v;
            }
            var vMid = (vMin + vMax) * 0.5;
            for (var _i = vIdx; _i < positions.length; _i += 3) {
              positions[_i] -= vMid;
            }

            // пересчёт bounds
            var minX = 1e9,
              minY = 1e9,
              minZ = 1e9,
              maxX = -1e9,
              maxY = -1e9,
              maxZ = -1e9;
            for (var _i2 = 0; _i2 < positions.length; _i2 += 3) {
              var x = positions[_i2],
                y = positions[_i2 + 1],
                z = positions[_i2 + 2];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (z < minZ) minZ = z;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              if (z > maxZ) maxZ = z;
            }
            minPos.set(minX, minY, minZ);
            maxPos.set(maxX, maxY, maxZ);
          }

          // ----- vertex buffer (pos3 normal3 uv2)
          var stride = 8 * 4;
          var vertCount = positions.length / 3;
          var vbAB = new ArrayBuffer(vertCount * stride);
          var vbF32 = new Float32Array(vbAB);
          for (var _i3 = 0; _i3 < vertCount; _i3++) {
            var _normals, _normals2, _normals3, _uvs, _uvs2;
            var dst = _i3 * 8;
            vbF32[dst] = positions[_i3 * 3];
            vbF32[dst + 1] = positions[_i3 * 3 + 1];
            vbF32[dst + 2] = positions[_i3 * 3 + 2];
            vbF32[dst + 3] = (_normals = normals[_i3 * 3]) != null ? _normals : 0;
            vbF32[dst + 4] = (_normals2 = normals[_i3 * 3 + 1]) != null ? _normals2 : 0;
            vbF32[dst + 5] = (_normals3 = normals[_i3 * 3 + 2]) != null ? _normals3 : 1;
            vbF32[dst + 6] = (_uvs = uvs[_i3 * 2]) != null ? _uvs : 0;
            vbF32[dst + 7] = (_uvs2 = uvs[_i3 * 2 + 1]) != null ? _uvs2 : 0;
          }
          var vbBytes = new Uint8Array(vbAB);

          // ----- индексы: ВСЕГДА склеиваем оба списка в один общий буфер
          var totalIdx = indices0.length + indices1.length;
          var indAll = new Uint32Array(totalIdx);
          indAll.set(indices0, 0);
          if (indices1.length) indAll.set(indices1, indices0.length);
          var ibBytes = new Uint8Array(indAll.buffer);

          // общий data буфер
          var joined = new Uint8Array(vbBytes.byteLength + ibBytes.byteLength);
          joined.set(vbBytes, 0);
          joined.set(ibBytes, vbBytes.byteLength);
          var vbOffset = 0,
            ibOffset = vbBytes.byteLength;

          // атрибуты
          var attrs = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F, false, 0, false, 0), new gfx.Attribute(gfx.AttributeName.ATTR_NORMAL, gfx.Format.RGB32F, false, 0, false, 1), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F, false, 0, false, 2)];

          // меш
          var mesh = new Mesh();
          mesh.reset({
            struct: {
              vertexBundles: [{
                attributes: attrs,
                view: {
                  offset: vbOffset,
                  length: vbBytes.byteLength,
                  count: vertCount,
                  stride: stride
                }
              }],
              primitives: oneSub ? [{
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset,
                  length: ibBytes.byteLength,
                  count: indAll.length,
                  stride: 4
                }
              }] : [{
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset + 0,
                  length: indices0.length * 4,
                  count: indices0.length,
                  stride: 4
                }
              }, {
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset + indices0.length * 4,
                  length: indices1.length * 4,
                  count: indices1.length,
                  stride: 4
                }
              }],
              minPosition: minPos,
              maxPosition: maxPos
            },
            data: joined
          });

          // материалы
          mr.mesh = mesh;
          mr.materials = oneSub ? [this.material1] : [this.material1, this.material2];
          var mi0 = mr.getMaterialInstance(0);
          this._applyMatProps(mi0, this.fontJson1, this.atlas1, this.color1);
          if (!oneSub) {
            var mi1 = mr.getMaterialInstance(1);
            this._applyMatProps(mi1, this.fontJson2, this.atlas2, this.color2);
          }
        }

        // ---------- геометрия одной строки (минимум аллокаций) ----------
        ;

        _proto._buildLine = function _buildLine(text, json, atlas, pixelScale, spacingScale, baselineOffsetY) {
          var _data$common$base,
            _this2 = this;
          var data = json.json;

          // glyph map
          var glyphMap = new Map();
          if (Array.isArray(data.chars)) {
            for (var _iterator = _createForOfIteratorHelperLoose(data.chars), _step; !(_step = _iterator()).done;) {
              var c = _step.value;
              glyphMap.set(c.id, c);
            }
          } else for (var k in data.chars) glyphMap.set(Number(k), data.chars[k]);

          // kerning
          var kmap = new Map();
          if (Array.isArray(data.kernings)) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(data.kernings), _step2; !(_step2 = _iterator2()).done;) {
              var _k = _step2.value;
              kmap.set(_k.first << 16 | _k.second, _k.amount);
            }
          } else if (data.kernings) for (var key in data.kernings) kmap.set(Number(key), data.kernings[key]);
          var kern = function kern(prev, curr) {
            var _kmap$get;
            return (_kmap$get = kmap.get(prev << 16 | curr)) != null ? _kmap$get : 0;
          };
          var S = Math.max(1e-4, pixelScale);
          var texW = Math.max(1, atlas.width),
            texH = Math.max(1, atlas.height);
          var lineH = data.common.lineHeight || 0;
          var base = (_data$common$base = data.common.base) != null ? _data$common$base : Math.round(lineH * 0.5);
          var baselineY = base * S;
          var infos = [];
          var penX = 0,
            minX = 1e9,
            maxX = -1e9;
          var codes = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(text), _step3; !(_step3 = _iterator3()).done;) {
            var ch = _step3.value;
            codes.push(ch.codePointAt(0));
          }
          for (var i = 0; i < codes.length; i++) {
            var _glyphMap$get;
            var g = (_glyphMap$get = glyphMap.get(codes[i])) != null ? _glyphMap$get : glyphMap.get(63);
            if (!g) continue;
            var advPx = (g.xadvance + (i > 0 ? kern(codes[i - 1], g.id) : 0)) * S * spacingScale;
            var left = penX + g.xoffset * S;
            var right = left + g.width * S;
            var yTop = (base - g.yoffset) * S;
            var yBot = yTop - g.height * S;
            infos.push({
              g: g,
              left: left,
              right: right,
              yTop: yTop,
              yBot: yBot
            });
            if (left < minX) minX = left;
            if (right > maxX) maxX = right;
            penX += advPx;
          }
          var span = Math.max(1e-4, maxX - minX);

          // кривизна
          var totalArc = 0,
            R = this.radius;
          if (this.bendMode === BendMode.Radius) {
            R = Math.max(1e-3, this.radius);
            totalArc = span / R;
          } else {
            var ang = math.toRadian(this.arcAngleDeg);
            totalArc = Math.max(0, ang);
            R = totalArc < 1e-6 ? 1e12 : span / totalArc;
          }
          var startAngle = 0;
          if (this.align === ArcAlign.Center) startAngle = -totalArc / 2;else if (this.align === ArcAlign.Right) startAngle = -totalArc;
          var sign = this.bend === ArcBend.Convex ? 1 : -1;

          // помощники без аллокаций
          var C0 = new Vec3(),
            C1 = new Vec3();
          var tmpQ0 = new math.Quat(),
            tmpQ1 = new math.Quat();
          var pointOnArcOut = function pointOnArcOut(theta, r, out) {
            switch (_this2.plane) {
              case ArcPlane.XY:
                out.set(Math.cos(theta) * r, Math.sin(theta) * r, 0);
                break;
              case ArcPlane.XZ:
                out.set(Math.cos(theta) * r, 0, Math.sin(theta) * r);
                break;
              case ArcPlane.YZ:
                out.set(0, Math.cos(theta) * r, Math.sin(theta) * r);
                break;
            }
          };
          var rotQuatDegOut = function rotQuatDegOut(deg, out) {
            var add = _this2.faceOutward ? 90 : 0;
            switch (_this2.plane) {
              case ArcPlane.XY:
                math.Quat.fromEuler(out, 0, 0, deg + add);
                break;
              case ArcPlane.XZ:
                math.Quat.fromEuler(out, 0, -(deg + add), 0);
                break;
              case ArcPlane.YZ:
                math.Quat.fromEuler(out, deg + add, 0, 0);
                break;
            }
          };
          var anchor = totalArc < 1e-6 ? new Vec3(minX + span * 0.5, baselineY, 0) : function () {
            var a = new Vec3();
            pointOnArcOut((startAngle + totalArc * 0.5) * sign, R, a);
            return a;
          }();

          // вертикальный вектор и оффсет
          var vAxis = this.plane === ArcPlane.YZ ? new Vec3(0, 0, 1) : new Vec3(0, 1, 0);
          var offX = vAxis.x * baselineOffsetY,
            offY = vAxis.y * baselineOffsetY,
            offZ = vAxis.z * baselineOffsetY;
          var baseNormal = this.plane === ArcPlane.XY ? new Vec3(0, 0, 1) : this.plane === ArcPlane.XZ ? new Vec3(0, 1, 0) : new Vec3(1, 0, 0);
          var n0 = new Vec3(),
            n1 = new Vec3();
          var positions = [];
          var normals = [];
          var uvs = [];
          var indices = [];
          var lt0 = new Vec3(),
            lb0 = new Vec3(),
            rt1 = new Vec3(),
            rb1 = new Vec3();
          var pivot0 = new Vec3(),
            pivot1 = new Vec3();
          for (var _i4 = 0, _infos = infos; _i4 < _infos.length; _i4++) {
            var inf = _infos[_i4];
            var _g = inf.g;
            var gw = Math.max(1e-4, _g.width * S);
            var cols = Math.ceil(_g.width / Math.max(1, Math.floor(this.segmentWidthPx)));
            cols = Math.max(this.minSegmentsPerGlyph, Math.min(this.maxSegmentsPerGlyph, cols));
            for (var ci = 0; ci < cols; ci++) {
              var t0 = ci / cols,
                t1 = (ci + 1) / cols;
              var gx0 = inf.left + gw * t0;
              var gx1 = inf.left + gw * t1;
              var theta0 = (startAngle + (gx0 - minX) / span * totalArc) * sign;
              var theta1 = (startAngle + (gx1 - minX) / span * totalArc) * sign;
              pointOnArcOut(theta0, R, C0);
              pointOnArcOut(theta1, R, C1);
              rotQuatDegOut(math.toDegree(theta0), tmpQ0);
              rotQuatDegOut(math.toDegree(theta1), tmpQ1);
              pivot0.set(gx0, baselineY, 0);
              pivot1.set(gx1, baselineY, 0);
              lt0.set(gx0, inf.yTop, 0);
              lb0.set(gx0, inf.yBot, 0);
              rt1.set(gx1, inf.yTop, 0);
              rb1.set(gx1, inf.yBot, 0);
              var p0 = new Vec3(lt0.x - pivot0.x, lt0.y - pivot0.y, 0);
              Vec3.transformQuat(p0, p0, tmpQ0);
              p0.add(C0).subtract(anchor);
              var p3 = new Vec3(lb0.x - pivot0.x, lb0.y - pivot0.y, 0);
              Vec3.transformQuat(p3, p3, tmpQ0);
              p3.add(C0).subtract(anchor);
              var p1 = new Vec3(rt1.x - pivot1.x, rt1.y - pivot1.y, 0);
              Vec3.transformQuat(p1, p1, tmpQ1);
              p1.add(C1).subtract(anchor);
              var p2 = new Vec3(rb1.x - pivot1.x, rb1.y - pivot1.y, 0);
              Vec3.transformQuat(p2, p2, tmpQ1);
              p2.add(C1).subtract(anchor);

              // вертикальный сдвиг
              p0.x += offX;
              p0.y += offY;
              p0.z += offZ;
              p1.x += offX;
              p1.y += offY;
              p1.z += offZ;
              p2.x += offX;
              p2.y += offY;
              p2.z += offZ;
              p3.x += offX;
              p3.y += offY;
              p3.z += offZ;
              Vec3.transformQuat(n0, baseNormal, tmpQ0);
              Vec3.transformQuat(n1, baseNormal, tmpQ1);

              // UV
              var u0 = (_g.x + _g.width * t0) / texW;
              var u1 = (_g.x + _g.width * t1) / texW;
              var v0 = _g.y / texH;
              var v1 = (_g.y + _g.height) / texH;
              if (!this.invertV) {
                v0 = 1 - v0;
                v1 = 1 - v1;
                var tv = v0;
                v0 = v1;
                v1 = tv;
              }
              if (this.mirrorX) {
                var tu = u0;
                u0 = u1;
                u1 = tu;
              }
              if (this.mirrorY) {
                var _tv = v0;
                v0 = v1;
                v1 = _tv;
              }
              var baseIdx = positions.length / 3;
              positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
              normals.push(n0.x, n0.y, n0.z, n1.x, n1.y, n1.z, n1.x, n1.y, n1.z, n0.x, n0.y, n0.z);
              uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              indices.push(baseIdx, baseIdx + 1, baseIdx + 2, baseIdx, baseIdx + 2, baseIdx + 3);
            }
          }

          // bounds
          var min = new Vec3(1e9, 1e9, 1e9),
            max = new Vec3(-1e9, -1e9, -1e9);
          for (var _i5 = 0; _i5 < positions.length; _i5 += 3) {
            var x = positions[_i5],
              y = positions[_i5 + 1],
              z = positions[_i5 + 2];
            if (x < min.x) min.x = x;
            if (y < min.y) min.y = y;
            if (z < min.z) min.z = z;
            if (x > max.x) max.x = x;
            if (y > max.y) max.y = y;
            if (z > max.z) max.z = z;
          }
          return {
            positions: positions,
            normals: normals,
            uvs: uvs,
            indices: indices,
            minPos: min,
            maxPos: max
          };
        }

        // ---------- материал/юниформы ----------
        ;

        _proto._applyMatProps = function _applyMatProps(mat, json, atlas, color) {
          if (!atlas) return;
          if (this.autoPxRange && json != null && json.json) {
            var _j$distanceField$dist, _j$distanceField;
            var j = json.json;
            mat.setProperty('pxRange', (_j$distanceField$dist = (_j$distanceField = j.distanceField) == null ? void 0 : _j$distanceField.distanceRange) != null ? _j$distanceField$dist : 4);
          }
          mat.setProperty('mainTexture', atlas);
          mat.setProperty('tintColor', color);
          mat.setProperty('softness', this.msdfSoftness);
          mat.setProperty('alphaClip', this.alphaClip);
        };
        _createClass(ArcTextMSDFTwoLinesSubmesh, [{
          key: "Force_Rebuild",
          get: function get() {
            return this._forceRebuild;
          },
          set: function set(v) {
            if (v) this._rebuild();
            this._forceRebuild = false;
          }
        }]);
        return ArcTextMSDFTwoLinesSubmesh;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editorLiveUpdate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buildOnStart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "freezeAfterBuild", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "Force_Rebuild", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "Force_Rebuild"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "text1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Ура!';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fontJson1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "atlas1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "material1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pixelScale1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spacingScale1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "color1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "text2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Михалыч';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fontJson2", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "atlas2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "material2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "pixelScale2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spacingScale2", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "color2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "lineSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "invertV", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "mirrorX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "mirrorY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "autoPxRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "msdfSoftness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "alphaClip", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bendMode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BendMode.ArcAngle;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "arcAngleDeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcPlane.XZ;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "align", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcAlign.Center;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "bend", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcBend.Concave;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "faceOutward", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "segmentWidthPx", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "minSegmentsPerGlyph", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "maxSegmentsPerGlyph", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "centerVertByBounds", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CakeApiExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7844ftwvDpJ44g6amQ0vR1m", "CakeApiExample", undefined);
      var ccclass = _decorator.ccclass;
      var CakeApiExample = exports('CakeApiExample', (_dec = ccclass('CakeApiExample'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CakeApiExample, _Component);
        function CakeApiExample() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CakeApiExample.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch("https://api.demo-stage.ru/cake/list", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({}) // ���� ��������� ������������ - ������ ��� ������� �������
                  });

                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 12;
                    break;
                  }
                  _context.t0 = console;
                  _context.t1 = response.status;
                  _context.next = 9;
                  return response.text();
                case 9:
                  _context.t2 = _context.sent;
                  _context.t0.error.call(_context.t0, "������ �������:", _context.t1, _context.t2);
                  return _context.abrupt("return");
                case 12:
                  _context.next = 14;
                  return response.json();
                case 14:
                  data = _context.sent;
                  console.log("����� �� API:", data);

                  // ���� � ������ ������ � ����� ���������:
                  if (Array.isArray(data)) {
                    data.forEach(function (item, i) {
                      console.log("\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD " + (i + 1) + ":", item);
                    });
                  } else {
                    console.log("������ �� ������, � ������:", data);
                  }
                  _context.next = 22;
                  break;
                case 19:
                  _context.prev = 19;
                  _context.t3 = _context["catch"](0);
                  console.error("������ ����������:", _context.t3);
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 19]]);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return CakeApiExample;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CenterOnTargetAtStart.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b86c0rFad9D9o+ZG/MSFLc8", "CenterOnTargetAtStart", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CenterOnTargetAtStart = exports('CenterOnTargetAtStart', (_dec = ccclass('CenterOnTargetAtStart'), _dec2 = property({
        type: Node,
        tooltip: '���� ����� (������), �� ������� ������� ��� ������.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CenterOnTargetAtStart, _Component);
        function CenterOnTargetAtStart() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CenterOnTargetAtStart.prototype;
        _proto.start = function start() {
          if (!this.target) {
            console.error('[CenterOnTargetAtStart] Target �� �����!');
            return;
          }

          // ��������� ������� ������ ������, ������������ ������ �� ����������� � �����.
          var camPos = this.node.worldPosition;
          var tgt = this.target.worldPosition;
          this.node.lookAt(new Vec3(tgt.x, camPos.y, tgt.z));
        };
        return CenterOnTargetAtStart;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickMoveBinding.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Tween, Vec3, tween, easing, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "06269Z0iQNODJORRQsOuBPu", "ClickMoveBinding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickMoveBinding = exports('ClickMoveBinding', (_dec = ccclass('ClickMoveBinding'), _dec2 = property({
        type: Node,
        tooltip: '���� ������� ��� ����� �� ����� �������'
      }), _dec3 = property({
        type: MeshRenderer,
        tooltip: '������ �� MeshRenderer (��������, ��� ������ �����)'
      }), _dec4 = property({
        type: Node,
        tooltip: '���� ������, ������� ����� �������� ������� �� Y'
      }), _dec5 = property({
        type: Node,
        tooltip: '�������: ���������� ��� ��������, ����������� ��� ��������'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickMoveBinding, _Component);
        function ClickMoveBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "meshRenderer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "model", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rim", _descriptor4, _assertThisInitialized(_this));
          // --- ����������� ��������� ���������� ---
          _this._startTargetPos = null;
          // ��������� ������� target
          _this._startModelEuler = null;
          // ��������� ������ ������
          _this._captured = false;
          return _this;
        }
        var _proto = ClickMoveBinding.prototype;
        _proto.onEnable = function onEnable() {
          this.ensureCaptured();
        }

        /** �������������� ����������� ��������� ���������� ���� ��� */;
        _proto.ensureCaptured = function ensureCaptured() {
          if (this._captured) return;
          if (this.target) {
            this._startTargetPos = this.target.getPosition().clone();
          }
          if (this.model) {
            this._startModelEuler = this.model.eulerAngles.clone();
          }
          this._captured = !!this.target; // ������� �����������, ���� ���� ���� �������
        }

        /** Ƹ���� ������� target � model � ����� (��� ��������) */;
        _proto.resetToStartImmediate = function resetToStartImmediate() {
          this.ensureCaptured();
          if (this.target && this._startTargetPos) {
            this.target.setPosition(this._startTargetPos);
          }
          if (this.model && this._startModelEuler) {
            this.model.setRotationFromEuler(this._startModelEuler.x, this._startModelEuler.y, this._startModelEuler.z);
          }
        }

        /** ���� ������� ��������� � ����� (��� �������) */;
        _proto.logWorld = function logWorld(label) {
          if (this.target) {
            console.log("[" + label + "] target world pos=", this.target.worldPosition.clone());
          }
          if (this.model) {
            console.log("[" + label + "] model  world pos=", this.model.worldPosition.clone(), 'euler=', this.model.eulerAngles.clone());
          }
        }

        /** ����� �� ��������� ������� �� ��������� X = distance (��������) */;
        _proto.moveOut = function moveOut(distanceLocalX, duration) {
          if (!this.target) {
            console.warn('[ClickMoveBinding] Target �� �������� ��', this.node.name);
            return;
          }
          this.ensureCaptured();
          if (!this._startTargetPos) this._startTargetPos = this.target.getPosition().clone();
          Tween.stopAllByTarget(this.target);
          var to = new Vec3(this._startTargetPos.x + distanceLocalX, this._startTargetPos.y, this._startTargetPos.z);
          tween(this.target).to(duration, {
            position: to
          }, {
            easing: easing.quadOut
          }).start();
        }

        /** ������� ����� � ��������� ������� (��������) */;
        _proto.moveIn = function moveIn(duration) {
          if (!this.target || !this._startTargetPos) return;
          Tween.stopAllByTarget(this.target);
          tween(this.target).to(duration, {
            position: this._startTargetPos.clone()
          }, {
            easing: easing.quadOut
          }).start();
        }

        /** ������ ������� ������ � ��������� ������� (��������) */;
        _proto.rotateModelToStart = function rotateModelToStart(duration, easingName) {
          var _this2 = this;
          return new Promise(function (resolve) {
            if (!_this2.model || !_this2._startModelEuler) {
              resolve();
              return;
            }
            if (duration <= 0) {
              _this2.model.setRotationFromEuler(_this2._startModelEuler.x, _this2._startModelEuler.y, _this2._startModelEuler.z);
              resolve();
              return;
            }
            var start = _this2.model.eulerAngles.clone();
            var end = _this2._startModelEuler.clone();
            var driver = {
              t: 0
            };
            tween(driver).to(duration, {
              t: 1
            }, {
              easing: easingName,
              onUpdate: function onUpdate() {
                // ���������� ������ Y, ����� ��������� ������������� ������������ X/Z, ���� ��� �� ��������.
                var y = start.y + (end.y - start.y) * driver.t;
                _this2.model.setRotationFromEuler(start.x, y, start.z);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        };
        return ClickMoveBinding;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "meshRenderer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Color, Texture2D, director, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Texture2D = module.Texture2D;
      director = module.director;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3;
      cclegacy._RF.push({}, "8daf7NAKxNJnqCgflAGm7av", "ColorLibrary", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColorTextureLibrary = exports('ColorTextureLibrary', (_dec = ccclass('ColorTextureLibrary'), _dec2 = property({
        type: [Color],
        tooltip: 'Палитра цветов'
      }), _dec3 = property({
        type: [Texture2D],
        tooltip: 'Набор текстур'
      }), _dec4 = property({
        tooltip: 'Имя юниформа для цвета #1'
      }), _dec5 = property({
        tooltip: 'Имя юниформа для цвета #2'
      }), _dec6 = property({
        tooltip: 'Имя юниформа для цвета #3'
      }), _dec7 = property({
        tooltip: 'Имя юниформа для цвета #4'
      }), _dec8 = property({
        tooltip: 'Имя юниформа для текстуры #1'
      }), _dec9 = property({
        tooltip: 'Имя юниформа для текстуры #2'
      }), _dec10 = property({
        tooltip: 'Необязательный seed для псевдослучайности (0 = Math.random)'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColorTextureLibrary, _Component);
        function ColorTextureLibrary() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ---------- данные палитры ----------
          _initializerDefineProperty(_this, "paletteColors", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paletteTextures", _descriptor2, _assertThisInitialized(_this));
          // ---------- имена юниформов ----------
          _initializerDefineProperty(_this, "colorUniform1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform4", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform2", _descriptor8, _assertThisInitialized(_this));
          // Если установлен, все случайности будут повторяемыми
          _initializerDefineProperty(_this, "seed", _descriptor9, _assertThisInitialized(_this));
          _this._rngState = 0;
          return _this;
        }
        var _proto = ColorTextureLibrary.prototype;
        _proto.onLoad = function onLoad() {
          if (ColorTextureLibrary._i) {
            this.destroy();
            return;
          }
          ColorTextureLibrary._i = this;
          director.addPersistRootNode(this.node);
          this._rngState = this.seed || Math.random() * 0x7fffffff | 0;
        }

        // ---------- RNG (линейный конгруэнтный, чтобы можно было фиксировать seed) ----------
        ;

        _proto._rand = function _rand() {
          if (!this.seed) return Math.random();
          // параметры LCG
          this._rngState = 1664525 * this._rngState + 1013904223 >>> 0;
          return (this._rngState & 0xffffffff) / 0x100000000;
        }

        // ---------- helpers для уникальных значений ----------
        ;

        _proto._pickUniqueIndices = function _pickUniqueIndices(total, count) {
          if (total <= 0 || count <= 0) return [];
          var idxs = Array.from({
            length: total
          }, function (_, i) {
            return i;
          });
          // Fisher–Yates с нашим RNG
          for (var i = idxs.length - 1; i > 0; i--) {
            var j = this._rand() * (i + 1) | 0;
            var _ref = [idxs[j], idxs[i]];
            idxs[i] = _ref[0];
            idxs[j] = _ref[1];
          }
          return idxs.slice(0, Math.min(total, count));
        }

        /** Вернёт до 4 уникальных цветов (может быть меньше, если палитра мала) */;
        _proto.get4Colors = function get4Colors() {
          var _this2 = this;
          if (!this.paletteColors.length) {
            console.warn('[CTL] Палитра цветов пуста');
            return [];
          }
          return this._pickUniqueIndices(this.paletteColors.length, 4).map(function (i) {
            return _this2.paletteColors[i];
          });
        }

        /** Вернёт до 2 уникальных текстур (может быть меньше, если палитра мала) */;
        _proto.get2Textures = function get2Textures() {
          var _this3 = this;
          if (!this.paletteTextures.length) {
            console.warn('[CTL] Набор текстур пуст');
            return [];
          }
          return this._pickUniqueIndices(this.paletteTextures.length, 2).map(function (i) {
            return _this3.paletteTextures[i];
          });
        };
        // ---------- низкоуровневые сеттеры ----------
        _proto._getMR = function _getMR(target) {
          return target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
        };
        _proto._getMatInstance = function _getMatInstance(mr, matIndex) {
          var _mr$getMaterialInstan;
          if (matIndex === void 0) {
            matIndex = 0;
          }
          // ВАЖНО: инстанс, а не общий material
          return (_mr$getMaterialInstan = mr.getMaterialInstance(matIndex)) != null ? _mr$getMaterialInstan : null;
        }

        /** Установить один цвет в материал по имени юниформа */;
        _proto.applyColor = function applyColor(target, color, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          mat.setProperty(uniform, color);
        };
        _proto.applyTexture = function applyTexture(target, tex, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          mat.setProperty(uniform, tex);
        };
        _proto.applyRandomSet = function applyRandomSet(target, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          var colors = this.get4Colors();
          var textures = this.get2Textures();
          this.colorUniforms.forEach(function (u, i) {
            if (u && colors[i]) mat.setProperty(u, colors[i]);
          });
          this.textureUniforms.forEach(function (u, i) {
            if (u && textures[i]) mat.setProperty(u, textures[i]);
          });
        }

        // маленький LCG для локального RNG
        ;

        _proto._rng = function _rng(seed) {
          var s = seed >>> 0;
          return function () {
            s = 1664525 * s + 1013904223 >>> 0;
            return (s & 0xffffffff) / 0x100000000;
          };
        }

        // выбор уникальных индексов с переданным rng
        ;

        _proto._pickUniqueWithRng = function _pickUniqueWithRng(total, count, rnd) {
          var n = Math.min(total, count);
          var idxs = Array.from({
            length: total
          }, function (_, i) {
            return i;
          });
          for (var i = idxs.length - 1; i > 0; i--) {
            var j = rnd() * (i + 1) | 0;
            var _ref2 = [idxs[j], idxs[i]];
            idxs[i] = _ref2[0];
            idxs[j] = _ref2[1];
          }
          return idxs.slice(0, n);
        }

        // СКОЛЬКО логических «наборов» поддерживаем (фиксируйте одно число на проект)
        ;

        _proto.getSetsCount = function getSetsCount() {
          return 256; // можно другое стабильное значение
        }

        // Применить набор по индексу (детерминированно, без глобального Math.random)
        ;

        _proto.applySetByIndex = function applySetByIndex(target, matIndex, setIndex) {
          var _this4 = this;
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          var count = this.getSetsCount();
          var seed = (setIndex % count + count) % count;
          var rnd = this._rng(0x9e3779b9 ^ seed);

          // цвета
          var colors = this._pickUniqueWithRng(this.paletteColors.length, 4, rnd).map(function (i) {
            return _this4.paletteColors[i];
          });
          while (colors.length < 4 && this.paletteColors.length > 0) {
            colors.push(this.paletteColors[rnd() * this.paletteColors.length | 0]);
          }

          // текстуры
          var textures = this._pickUniqueWithRng(this.paletteTextures.length, 2, rnd).map(function (i) {
            return _this4.paletteTextures[i];
          });
          while (textures.length < 2 && this.paletteTextures.length > 0) {
            textures.push(this.paletteTextures[rnd() * this.paletteTextures.length | 0]);
          }
          this.colorUniforms.forEach(function (u, i) {
            if (u && colors[i]) mat.setProperty(u, colors[i]);
          });
          this.textureUniforms.forEach(function (u, i) {
            if (u && textures[i]) mat.setProperty(u, textures[i]);
          });
        }

        /**
         * Применить набор к каждому материалу MeshRenderer (если их несколько).
         * Удобно, если у меша несколько сабмешей/материалов.
         */;
        _proto.applyRandomSetToAllMaterials = function applyRandomSetToAllMaterials(target) {
          var mr = this._getMR(target);
          if (!mr) return;
          for (var i = 0; i < mr.materials.length; i++) {
            this.applyRandomSet(mr, i);
          }
        };
        _createClass(ColorTextureLibrary, [{
          key: "colorUniforms",
          get: function get() {
            return [this.colorUniform1, this.colorUniform2, this.colorUniform3, this.colorUniform4].filter(Boolean);
          }
        }, {
          key: "textureUniforms",
          get: function get() {
            return [this.textureUniform1, this.textureUniform2].filter(Boolean);
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._i;
          }
        }]);
        return ColorTextureLibrary;
      }(Component), _class3._i = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "paletteColors", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "paletteTextures", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor1';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor2';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor3';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor4';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex1';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex2';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "seed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './VerticalMoveAroundTarget.ts', './InteractionState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, input, Input, clamp, Vec2, Vec3, Component, VerticalMoveAroundTarget, InteractionState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      clamp = module.clamp;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      VerticalMoveAroundTarget = module.VerticalMoveAroundTarget;
    }, function (module) {
      InteractionState = module.InteractionState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "15f6cp12VhM7IGhUEx42YWM", "FreeCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VerticalZoomAroundTargetXZ = exports('VerticalZoomAroundTargetXZ', (_dec = ccclass('VerticalZoomAroundTargetXZ'), _dec2 = property({
        type: Node,
        tooltip: 'Таргет: и вертикаль (Y), и точка зума (XZ).'
      }), _dec3 = property({
        tooltip: 'Азимут (yaw) вокруг таргета в градусах. 0° = +Z, 90° = +X.'
      }), _dec4 = property({
        tooltip: 'Стартовая дистанция (по XZ).'
      }), _dec5 = property({
        tooltip: 'Плавность зума (сек). Меньше — резче.'
      }), _dec6 = property({
        tooltip: 'Высота по умолчанию, если нет VerticalMoveAroundTarget.'
      }), _dec7 = property({
        tooltip: 'Шаг зума от колёсика.'
      }), _dec8 = property({
        tooltip: 'Инвертировать колесо: к себе — приближение.'
      }), _dec9 = property({
        tooltip: 'Порог изменения межпальцевого расстояния (px) для старта щипка.'
      }), _dec10 = property({
        tooltip: 'Чувствительность щипка: изменение дистанции на 1 пиксель.'
      }), _dec11 = property({
        tooltip: 'Инвертировать щипок: сводим пальцы — приближение.'
      }), _dec12 = property({
        tooltip: 'Брать базовую высоту из VerticalMoveAroundTarget.startHeight.'
      }), _dec13 = property({
        tooltip: 'Базовая высота (если не берём из VerticalMoveAroundTarget).'
      }), _dec14 = property({
        tooltip: 'MIN дистанция на базовой высоте.'
      }), _dec15 = property({
        tooltip: 'MAX дистанция на базовой высоте.'
      }), _dec16 = property({
        tooltip: 'Насколько меняется MIN на +1 высоты (вверх уменьшает min).'
      }), _dec17 = property({
        tooltip: 'Насколько меняется MAX на +1 высоты (вверх уменьшает max).'
      }), _dec18 = property({
        tooltip: 'Жёсткие пределы, чтобы не улететь в ноль/бесконечность. MIN.'
      }), _dec19 = property({
        tooltip: 'Жёсткие пределы, чтобы не улететь в ноль/бесконечность. MAX.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalZoomAroundTargetXZ, _Component);
        function VerticalZoomAroundTargetXZ() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yawDeg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSmoothTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fallbackHeight", _descriptor5, _assertThisInitialized(_this));
          // ===== колесо
          _initializerDefineProperty(_this, "zoomStep", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertWheel", _descriptor7, _assertThisInitialized(_this));
          // ===== pinch (тач)
          _initializerDefineProperty(_this, "pinchThresholdPx", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pinchUnitsPerPixel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertPinch", _descriptor10, _assertThisInitialized(_this));
          // ===== ЛИНЕЙНЫЕ ДИНАМИЧЕСКИЕ ГРАНИЦЫ ОТ ВЫСОТЫ =====
          _initializerDefineProperty(_this, "useBaselineFromVertical", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baselineHeight", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDistAtBaseline", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDistAtBaseline", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minPerHeight", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxPerHeight", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hardMin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hardMax", _descriptor18, _assertThisInitialized(_this));
          // ===== внутреннее
          _this.targetDistance = 0;
          _this.currentDistance = 0;
          _this.pendingDeltaDist = 0;
          // pinch state
          _this.pinchId1 = null;
          _this.pinchId2 = null;
          _this.pinchStartGap = 0;
          _this.pinchLastGap = 0;
          _this.pinchAccumPx = 0;
          _this.pinchActive = false;
          _this.pinchClaimed = false;
          // актуальные динамические границы на кадр
          _this.dynMin = 2;
          _this.dynMax = 50;
          return _this;
        }
        var _proto = VerticalZoomAroundTargetXZ.prototype;
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.start = function start() {
          if (!this.target) {
            console.error('[VerticalZoomAroundTargetXZ] Target не задан!');
            return;
          }
          // первичная установка лимитов
          this._updateDynamicLimits();
          this.targetDistance = clamp(this.distance, this.dynMin, this.dynMax);
          this.currentDistance = this.targetDistance;
          this.applyTransform();
        }

        // ---------- колесо ----------
        ;

        _proto.onMouseWheel = function onMouseWheel(e) {
          var sign = this.invertWheel ? -1 : 1;
          this.pendingDeltaDist += sign * e.getScrollY() * this.zoomStep * 0.1;
        }

        // ---------- pinch ----------
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          var id = e.getID();
          if (this.pinchId1 === null) this.pinchId1 = id;else if (this.pinchId2 === null && id !== this.pinchId1) {
            this.pinchId2 = id;
            var p1 = this._touchPos(this.pinchId1, e);
            var p2 = this._touchPos(this.pinchId2, e);
            if (p1 && p2) {
              this.pinchStartGap = this._gap(p1, p2);
              this.pinchLastGap = this.pinchStartGap;
              this.pinchAccumPx = 0;
              this.pinchActive = false;
              this.pinchClaimed = false;
            }
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (this.pinchId1 === null || this.pinchId2 === null) return;
          var p1 = this._touchPos(this.pinchId1, e);
          var p2 = this._touchPos(this.pinchId2, e);
          if (!p1 || !p2) return;
          var gap = this._gap(p1, p2);
          var gapIncPx = gap - this.pinchLastGap;
          var totalPx = gap - this.pinchStartGap;
          this.pinchLastGap = gap;
          if (!this.pinchActive) {
            this.pinchAccumPx += gapIncPx;
            if (Math.abs(totalPx) >= this.pinchThresholdPx) {
              this.pinchActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(this.pinchId1, 'touch');
                this.pinchClaimed = true;
              }
              InteractionState.markDrag(this.pinchId1);
            } else {
              return;
            }
          }
          if (gapIncPx !== 0) {
            var sign = this.invertPinch ? -1 : 1;
            this.pendingDeltaDist += gapIncPx * this.pinchUnitsPerPixel * sign;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          var id = e.getID();
          if (id === this.pinchId1 || id === this.pinchId2) {
            if (this.pinchClaimed) InteractionState.tryEndGesture(this.pinchId1, 'touch');
            this._resetPinch();
          }
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          var id = e.getID();
          if (id === this.pinchId1 || id === this.pinchId2) {
            if (this.pinchClaimed) InteractionState.tryEndGesture(this.pinchId1, 'touch');
            this._resetPinch();
          }
        };
        _proto._resetPinch = function _resetPinch() {
          this.pinchId1 = this.pinchId2 = null;
          this.pinchStartGap = this.pinchLastGap = 0;
          this.pinchAccumPx = 0;
          this.pinchActive = false;
          this.pinchClaimed = false;
        };
        _proto._touchPos = function _touchPos(id, evt) {
          var all = evt.getAllTouches == null ? void 0 : evt.getAllTouches();
          if (all && all.length > 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(all), _step; !(_step = _iterator()).done;) {
              var t = _step.value;
              if (t.getID() === id) return new Vec2(t.getLocationX(), t.getLocationY());
            }
            return null;
          }
          if (evt.getID() === id) return new Vec2(evt.getLocationX(), evt.getLocationY());
          return null;
        };
        _proto._gap = function _gap(a, b) {
          var dx = a.x - b.x,
            dy = a.y - b.y;
          return Math.sqrt(dx * dx + dy * dy);
        }

        // ---------- динамические лимиты: linear от базовой высоты ----------
        ;

        _proto._getOffsetY = function _getOffsetY() {
          var vm = this.getComponent(VerticalMoveAroundTarget);
          return vm ? vm.offsetY : this.fallbackHeight;
        };
        _proto._getBaseline = function _getBaseline() {
          if (this.useBaselineFromVertical) {
            var vm = this.getComponent(VerticalMoveAroundTarget);
            if (vm && typeof vm.startHeight === 'number') return vm.startHeight;
          }
          return this.baselineHeight;
        }

        /** Считает dynMin/dynMax линейно от (offsetY - baseline).
         *  Выше базы -> границы уменьшаются; ниже -> увеличиваются.
         */;
        _proto._updateDynamicLimits = function _updateDynamicLimits() {
          var h = this._getOffsetY();
          var h0 = this._getBaseline();
          var dh = h - h0; // +вверх, -вниз

          // min/max на текущей высоте:
          var minDyn = this.minDistAtBaseline - this.minPerHeight * dh;
          var maxDyn = this.maxDistAtBaseline - this.maxPerHeight * dh;

          // жёсткие пределы и корректность
          minDyn = clamp(minDyn, this.hardMin, this.hardMax);
          maxDyn = clamp(maxDyn, this.hardMin, this.hardMax);
          if (maxDyn < minDyn) {
            var mid = 0.5 * (minDyn + maxDyn);
            minDyn = mid - 0.001;
            maxDyn = mid + 0.001;
          }
          this.dynMin = minDyn;
          this.dynMax = maxDyn;
        }

        // ---------- апдейт ----------
        ;

        _proto.update = function update(dt) {
          if (!this.target) return;

          // 1) обновим линейные динамические лимиты от высоты
          this._updateDynamicLimits();

          // 2) применим накопленное изменение дистанции (колесо/щипок)
          if (this.pendingDeltaDist !== 0) {
            this.targetDistance += this.pendingDeltaDist;
            this.pendingDeltaDist = 0;
          }

          // 3) клампим таргет по динамическим лимитам
          this.targetDistance = clamp(this.targetDistance, this.dynMin, this.dynMax);

          // 4) плавно тянем current к target
          var k = this.zoomSmoothTime > 0 ? 1 - Math.exp(-dt / this.zoomSmoothTime) : 1;
          this.currentDistance += (this.targetDistance - this.currentDistance) * k;

          // защитный кламп current (если лимиты сдвинулись резко из-за изменения высоты)
          this.currentDistance = clamp(this.currentDistance, this.dynMin, this.dynMax);
          this.applyTransform();
        };
        _proto.applyTransform = function applyTransform() {
          var tgt = this.target.worldPosition;
          var offsetY = this._getOffsetY(); // текущая высота камеры от VerticalMoveAroundTarget

          var yaw = this.yawDeg * Math.PI / 180;
          var offX = Math.sin(yaw) * this.currentDistance;
          var offZ = Math.cos(yaw) * this.currentDistance;
          var camPos = new Vec3(tgt.x + offX, tgt.y + offsetY, tgt.z + offZ);
          this.node.setWorldPosition(camPos);
          this.node.lookAt(new Vec3(tgt.x, camPos.y, tgt.z));
        };
        return VerticalZoomAroundTargetXZ;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yawDeg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zoomSmoothTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fallbackHeight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "zoomStep", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "invertWheel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pinchThresholdPx", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pinchUnitsPerPixel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "invertPinch", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "useBaselineFromVertical", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "baselineHeight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minDistAtBaseline", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxDistAtBaseline", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "minPerHeight", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "maxPerHeight", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "hardMin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "hardMax", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalClickManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './InteractionState.ts', './PointerIds.ts', './RotateYByKeys.ts', './TowerWindowScroller.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, input, Input, tween, Vec3, MeshRenderer, geometry, Mat4, Component, PhysicsSystem, ClickMoveBinding, InteractionState, MOUSE_ID, RotateYByKeys, TowerVirtualScroller;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      tween = module.tween;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      geometry = module.geometry;
      Mat4 = module.Mat4;
      Component = module.Component;
      PhysicsSystem = module.PhysicsSystem;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }, function (module) {
      RotateYByKeys = module.RotateYByKeys;
    }, function (module) {
      TowerVirtualScroller = module.TowerVirtualScroller;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "4bd86blOoRLpq75wEwnh3v5", "GlobalClickManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      function yawFromVecXZ(v) {
        return Math.atan2(v.x, v.z) * 180 / Math.PI;
      }
      function shortestAngleDeg(delta) {
        return (delta + 540) % 360 - 180;
      }
      var State = /*#__PURE__*/function (State) {
        State["Idle"] = "Idle";
        State["Aligning"] = "Aligning";
        State["SlideOut"] = "SlideOut";
        State["RotateModelOpen"] = "RotateModelOpen";
        State["LockedOut"] = "LockedOut";
        State["RotateModelClose"] = "RotateModelClose";
        State["SlideIn"] = "SlideIn";
        return State;
      }(State || {});
      var GlobalClickManager3D = exports('GlobalClickManager3D', (_dec = ccclass('GlobalClickManager3D'), _dec2 = property({
        type: Camera,
        tooltip: 'Камера сцены для рейкастов.'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Корень башни (торта), который вращаем вокруг Y.'
      }), _dec4 = property({
        type: RotateYByKeys,
        tooltip: 'Скрипт ручного поворота башни.'
      }), _dec5 = property({
        type: TowerVirtualScroller,
        tooltip: 'Скроллер башни: используется scrollToNodeLevel(model, opts).'
      }), _dec6 = property({
        tooltip: 'Длительность автоповорота башни (сек).'
      }), _dec7 = property({
        tooltip: 'Длительность центрирования по уровню (сек).'
      }), _dec8 = property({
        tooltip: 'Длительность движения кусочка (сек).'
      }), _dec9 = property({
        tooltip: 'Длительность поворота МОДЕЛИ (сек).'
      }), _dec10 = property({
        tooltip: 'Easing поворота модели.'
      }), _dec11 = property({
        tooltip: 'БАЗОВОЕ расстояние выезда в МИРЕ (по XZ к камере). Используется как модуль.'
      }), _dec12 = property({
        tooltip: 'От какой оси масштаба зависеть: X/Y/Z'
      }), _dec13 = property({
        tooltip: 'Влияние масштаба: 1=полное (×scaleAxis), 0.5=частичное, 0=выкл.'
      }), _dec14 = property({
        tooltip: 'Мин. модуль выезда после масштаба. 0 — без минимума.'
      }), _dec15 = property({
        tooltip: 'Макс. модуль выезда после масштаба. 0 — без потолка.'
      }), _dec16 = property({
        tooltip: 'Лицевая ось кусочка: true — использовать -X вместо +X (для автоповорота башни).'
      }), _dec17 = property({
        tooltip: 'Угол модели по Y при ОТКРЫТИИ (градусы).'
      }), _dec18 = property({
        tooltip: 'Угол модели по Y при ЗАКРЫТИИ (если нужен форс, иначе стартовый).'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalClickManager3D, _Component);
        function GlobalClickManager3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ------------------------------------------------------------
          // [References]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "sceneCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotatingRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotator", _descriptor3, _assertThisInitialized(_this));
          // Вертикальный скроллер уровней
          _initializerDefineProperty(_this, "heightScroll", _descriptor4, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Timings]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "rotateDuration", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heightCenterDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateDuration", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateEasing", _descriptor9, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Slide distance (base) + scale influence]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "baseSlideDistance", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleAxis", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleInfluence", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minAbsDistance", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxAbsDistance", _descriptor14, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Facing & model/rim]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "invertPieceAxis", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openYawDeg", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeYawDeg", _descriptor17, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [State]
          // ------------------------------------------------------------
          _this.fsm = State.Idle;
          _this.currentPiece = null;
          _this.currentBinding = null;
          _this.currentModel = null;
          _this.currentRim = null;
          _this.lastDistanceUsed = 0;
          _this._lastScaleUsed = 1;
          return _this;
        }
        var _proto = GlobalClickManager3D.prototype;
        // ------------------------------------------------------------
        // [Input wiring]
        // ------------------------------------------------------------
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        // ------------------------------------------------------------
        // [Input handlers]
        // ------------------------------------------------------------
        ;

        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this.sceneCamera) return;
          if (this.fsm === State.LockedOut) {
            void this.slideInAndUnlock();
            return;
          }
          if (this.fsm !== State.Idle) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          var _InteractionState$try = InteractionState.tryEndGesture(e.getID(), 'touch'),
            ended = _InteractionState$try.ended,
            wasDragged = _InteractionState$try.wasDragged;
          if (!ended || wasDragged) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          InteractionState.tryEndGesture(e.getID(), 'touch');
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (!this.sceneCamera || e.getButton() !== 0) return;
          if (this.fsm === State.LockedOut) {
            void this.slideInAndUnlock();
            return;
          }
          if (this.fsm !== State.Idle) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          var res = InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          var wasDrag = res.wasDragged || InteractionState.consumeRecentDrag();
          if (wasDrag) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        }

        // ------------------------------------------------------------
        // [Click flow]
        // ------------------------------------------------------------
        ;

        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(x, y) {
            var _binding$model,
              _rim,
              _this2 = this,
              _this$currentBinding$,
              _this$currentBinding,
              _this$currentBinding$2,
              _this$currentBinding2;
            var ray, hit, n, binding, rotP, levelP, absDist, moveNode, anchorNode, dirXZ, finalWorldPos;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.sceneCamera || !this.rotatingRoot)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  // рейкаст
                  ray = new geometry.Ray();
                  this.sceneCamera.screenPointToRay(x, y, ray);
                  if (PhysicsSystem.instance.raycastClosest(ray)) {
                    _context2.next = 6;
                    break;
                  }
                  return _context2.abrupt("return");
                case 6:
                  // биндинг вверх по иерархии
                  hit = PhysicsSystem.instance.raycastClosestResult;
                  n = hit.collider.node;
                  binding = null;
                  while (n && !binding) {
                    binding = n.getComponent(ClickMoveBinding) || null;
                    if (!binding) n = n.parent;
                  }
                  if (!(!binding || !n)) {
                    _context2.next = 12;
                    break;
                  }
                  return _context2.abrupt("return");
                case 12:
                  if (!(this.fsm !== State.Idle)) {
                    _context2.next = 14;
                    break;
                  }
                  return _context2.abrupt("return");
                case 14:
                  this.currentPiece = n;
                  this.currentBinding = binding;

                  // модель строго из ClickMoveBinding.model (если пусто — кусок)
                  this.currentModel = (_binding$model = binding.model) != null ? _binding$model : n;
                  this.currentRim = (_rim = binding.rim) != null ? _rim : null;
                  if (this.currentRim) this.currentRim.active = false;
                  this.lockControls();

                  // === 1) Aligning: поворот башни + центрирование ПО УРОВНЮ модели ===
                  this.fsm = State.Aligning;
                  rotP = this.rotateTowerToFaceCamera(n);
                  levelP = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var _this2$currentModel, ok, _this2$currentModel$n, _this2$currentModel2;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!_this2.heightScroll) {
                            _context.next = 5;
                            break;
                          }
                          _context.next = 3;
                          return _this2.heightScroll.scrollToNodeOrAncestorLevelSafe((_this2$currentModel = _this2.currentModel) != null ? _this2$currentModel : n, {
                            duration: _this2.heightCenterDuration,
                            easing: 'quadOut',
                            clamp: true
                          });
                        case 3:
                          ok = _context.sent;
                          if (!ok) {
                            // eslint-disable-next-line no-console
                            console.warn('[GCM3D] Не удалось определить уровень для модели/родителей:', (_this2$currentModel$n = (_this2$currentModel2 = _this2.currentModel) == null ? void 0 : _this2$currentModel2.name) != null ? _this2$currentModel$n : n.name);
                          }
                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))();
                  _context2.next = 25;
                  return Promise.all([rotP, levelP]);
                case 25:
                  // === 2) RimOn + SlideOut (К камере по XZ; дистанция со скейлом) ===
                  this.fsm = State.SlideOut;
                  if (this.currentRim) this.currentRim.active = true;
                  this.currentBinding.ensureCaptured();
                  absDist = this.computeAbsDistanceForPiece(n, Math.abs(this.baseSlideDistance));
                  this.lastDistanceUsed = absDist; // к камере
                  moveNode = this.getMoveNodeForBinding(this.currentBinding, n);
                  anchorNode = this.currentModel || n;
                  dirXZ = this.computeDirToCameraXZ(anchorNode);
                  finalWorldPos = this.computeFinalPosForAnchorAlong(moveNode, anchorNode, dirXZ, this.lastDistanceUsed);
                  (_this$currentBinding$ = (_this$currentBinding = this.currentBinding).logWorld) == null || _this$currentBinding$.call(_this$currentBinding, 'SlideOut START (towards camera on XZ)');
                  _context2.next = 37;
                  return this.tweenWorldPositionTo(moveNode, finalWorldPos, this.slideDuration);
                case 37:
                  (_this$currentBinding$2 = (_this$currentBinding2 = this.currentBinding).logWorld) == null || _this$currentBinding$2.call(_this$currentBinding2, 'SlideOut END');

                  // === 3) RotateModelOpen ===
                  this.fsm = State.RotateModelOpen;
                  if (!this.currentModel) {
                    _context2.next = 42;
                    break;
                  }
                  _context2.next = 42;
                  return this.rotateModelTo(this.currentModel, this.openYawDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 42:
                  // === 4) LockedOut ===
                  this.fsm = State.LockedOut;
                case 43:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClick(_x, _x2) {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }() // ------------------------------------------------------------
        // [SlideIn flow]
        // ------------------------------------------------------------
        ;

        _proto.slideInAndUnlock = /*#__PURE__*/
        function () {
          var _slideInAndUnlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this$currentBinding$3, _this$currentBinding3, _this$currentBinding$4, _this$currentBinding4;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.fsm !== State.LockedOut)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  if (this.currentBinding) {
                    _context3.next = 6;
                    break;
                  }
                  this.unlockControls();
                  this.resetCycle();
                  return _context3.abrupt("return");
                case 6:
                  this.fsm = State.RotateModelClose;
                  _context3.next = 9;
                  return this.currentBinding.rotateModelToStart(this.modelRotateDuration, this.modelRotateEasing);
                case 9:
                  this.fsm = State.SlideIn;
                  (_this$currentBinding$3 = (_this$currentBinding3 = this.currentBinding).logWorld) == null || _this$currentBinding$3.call(_this$currentBinding3, 'SlideIn START');
                  this.currentBinding.moveIn(this.slideDuration);
                  _context3.next = 14;
                  return this.delayByTween(this.node, this.slideDuration);
                case 14:
                  (_this$currentBinding$4 = (_this$currentBinding4 = this.currentBinding).logWorld) == null || _this$currentBinding$4.call(_this$currentBinding4, 'SlideIn END');
                  if (this.currentRim) this.currentRim.active = false;
                  this.unlockControls();
                  this.resetCycle();
                  this.fsm = State.Idle;
                case 19:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function slideInAndUnlock() {
            return _slideInAndUnlock.apply(this, arguments);
          }
          return slideInAndUnlock;
        }();
        _proto.resetCycle = function resetCycle() {
          this.currentPiece = null;
          this.currentBinding = null;
          this.currentModel = null;
          this.currentRim = null;
          this.lastDistanceUsed = 0;
        }

        // ------------------------------------------------------------
        // [Lock / Unlock]
        // ------------------------------------------------------------
        ;

        _proto.lockControls = function lockControls() {
          var _this$rotator;
          (_this$rotator = this.rotator) == null || _this$rotator.stopInertia();
          if (this.rotator) this.rotator.enabled = false;
          InteractionState.hardReset == null || InteractionState.hardReset();
        };
        _proto.unlockControls = function unlockControls() {
          if (this.rotator) this.rotator.enabled = true;
          InteractionState.hardReset == null || InteractionState.hardReset();
        }

        // ------------------------------------------------------------
        // [Distance calc with scale]
        // ------------------------------------------------------------
        ;

        _proto.computeAbsDistanceForPiece = function computeAbsDistanceForPiece(pieceNode, baseAbsDistance) {
          var ws = pieceNode.worldScale;
          var sAxis = this.scaleAxis === 'X' ? Math.abs(ws.x) : this.scaleAxis === 'Y' ? Math.abs(ws.y) : Math.abs(ws.z);
          if (sAxis < 1e-4) sAxis = Math.max(Math.abs(ws.x), Math.abs(ws.y), Math.abs(ws.z));
          var inf = Math.max(0, this.scaleInfluence);
          var scaledAbs = inf >= 0.999 ? baseAbsDistance * sAxis : baseAbsDistance * (1 + inf * (sAxis - 1));
          if (this.minAbsDistance > 0) scaledAbs = Math.max(scaledAbs, this.minAbsDistance);
          if (this.maxAbsDistance > 0) scaledAbs = Math.min(scaledAbs, this.maxAbsDistance);
          if (scaledAbs < 1e-4) scaledAbs = baseAbsDistance;
          this._lastScaleUsed = sAxis;
          return Math.abs(scaledAbs);
        }

        // ------------------------------------------------------------
        // [Rotate model tween]
        // ------------------------------------------------------------
        ;

        _proto.rotateModelTo = function rotateModelTo(model, targetYawDeg, duration, easingName) {
          return new Promise(function (resolve) {
            var e = model.eulerAngles;
            var startY = e.y;
            var endY = targetYawDeg;
            if (Math.abs(endY - startY) < 0.01 || duration <= 0) {
              model.setRotationFromEuler(e.x, endY, e.z);
              resolve();
              return;
            }
            var driver = {
              t: 0
            };
            tween(driver).to(duration, {
              t: 1
            }, {
              easing: easingName,
              onUpdate: function onUpdate() {
                var y = startY + (endY - startY) * driver.t;
                model.setRotationFromEuler(e.x, y, e.z);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ------------------------------------------------------------
        // [Auto-rotate tower to face camera]
        // ------------------------------------------------------------
        ;

        _proto.rotateTowerToFaceCamera = function rotateTowerToFaceCamera(chunkNode) {
          var _this3 = this;
          return new Promise(function (resolve) {
            var _this3$rotator;
            if (!_this3.rotatingRoot || !_this3.sceneCamera) {
              resolve();
              return;
            }
            var root = _this3.rotatingRoot;
            var baseLocal = _this3.invertPieceAxis ? new Vec3(-1, 0, 0) : new Vec3(1, 0, 0);
            var worldRot = chunkNode.worldRotation;
            var outwardWorld = new Vec3();
            Vec3.transformQuat(outwardWorld, baseLocal, worldRot);
            outwardWorld.y = 0;
            if (outwardWorld.length() < 1e-4) {
              Vec3.transformQuat(outwardWorld, new Vec3(0, 0, -1), worldRot);
              outwardWorld.y = 0;
              if (outwardWorld.length() < 1e-4) {
                resolve();
                return;
              }
            }
            outwardWorld.normalize();
            var pieceYaw = yawFromVecXZ(outwardWorld);
            var rootPos = root.worldPosition;
            var camPos = _this3.sceneCamera.node.worldPosition;
            var toCam = new Vec3(camPos.x - rootPos.x, 0, camPos.z - rootPos.z);
            if (toCam.length() < 1e-4) {
              resolve();
              return;
            }
            toCam.normalize();
            var camYaw = yawFromVecXZ(toCam);
            var deltaYawDeg = shortestAngleDeg(camYaw - pieceYaw);
            if (Math.abs(deltaYawDeg) < 0.1 || _this3.rotateDuration <= 0) {
              resolve();
              return;
            }
            (_this3$rotator = _this3.rotator) == null || _this3$rotator.stopInertia();
            var startEuler = root.eulerAngles;
            var startYaw = startEuler.y;
            var endYaw = startYaw + deltaYawDeg;
            var tmp = {
              t: 0
            };
            tween(tmp).to(_this3.rotateDuration, {
              t: 1
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                var y = startYaw + (endYaw - startYaw) * tmp.t;
                root.setRotationFromEuler(startEuler.x, y, startEuler.z);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ------------------------------------------------------------
        // [AABB utils] (нужны для направления к камере)
        // ------------------------------------------------------------
        ;

        _proto.computeWorldAABB = function computeWorldAABB(node) {
          var renderers = node.getComponentsInChildren(MeshRenderer);
          if (renderers.length === 0) return null;
          var acc = null;
          var tmp = new geometry.AABB();
          var m = new Mat4();
          for (var _iterator = _createForOfIteratorHelperLoose(renderers), _step; !(_step = _iterator()).done;) {
            var r = _step.value;
            var mb = r.modelBounds;
            if (!mb) continue;
            r.node.getWorldMatrix(m);
            geometry.AABB.transform(tmp, mb, m);
            if (!acc) {
              acc = new geometry.AABB(tmp.center.x, tmp.center.y, tmp.center.z, tmp.halfExtents.x, tmp.halfExtents.y, tmp.halfExtents.z);
            } else {
              geometry.AABB.merge(acc, acc, tmp);
            }
          }
          return acc;
        };
        _proto.getAnchorCenterWorld = function getAnchorCenterWorld(targetNode) {
          var aabb = this.computeWorldAABB(targetNode);
          if (aabb) return new Vec3(aabb.center.x, aabb.center.y, aabb.center.z);
          return targetNode.worldPosition.clone();
        }

        // ------------------------------------------------------------
        // [World move helpers for "fixed distance on XZ"]
        // ------------------------------------------------------------
        ;

        _proto.getMoveNodeForBinding = function getMoveNodeForBinding(binding, piece) {
          var anyBinding = binding;
          return anyBinding.target || piece;
        };
        _proto.computeDirToCameraXZ = function computeDirToCameraXZ(anchorNode) {
          var camPos = this.sceneCamera.node.worldPosition;
          var anchor = this.getAnchorCenterWorld(anchorNode);
          var v = new Vec3(camPos.x - anchor.x, 0, camPos.z - anchor.z);
          if (v.length() < 1e-6) return new Vec3(0, 0, 1);
          v.normalize();
          return v;
        };
        _proto.computeFinalPosForAnchorAlong = function computeFinalPosForAnchorAlong(moveNode, _anchorNode, dirXZ, distance) {
          var delta = new Vec3(dirXZ.x * distance, 0, dirXZ.z * distance);
          var start = moveNode.worldPosition;
          return new Vec3(start.x + delta.x, start.y + delta.y, start.z + delta.z);
        };
        _proto.tweenWorldPositionTo = function tweenWorldPositionTo(node, targetWorld, duration) {
          return new Promise(function (resolve) {
            var start = node.worldPosition.clone();
            var driver = {
              t: 0
            };
            tween(driver).to(duration, {
              t: 1
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                var p = new Vec3(start.x + (targetWorld.x - start.x) * driver.t, start.y + (targetWorld.y - start.y) * driver.t, start.z + (targetWorld.z - start.z) * driver.t);
                node.setWorldPosition(p);
              }
            }).call(function () {
              node.setWorldPosition(targetWorld);
              resolve();
            }).start();
          });
        }

        // ------------------------------------------------------------
        // [Tween delay helper]
        // ------------------------------------------------------------
        ;

        _proto.delayByTween = function delayByTween(target, seconds) {
          return new Promise(function (resolve) {
            tween(target).delay(seconds).call(function () {
              return resolve();
            }).start();
          });
        }

        // === [PUBLIC] Открыть конкретный кусок без клика ===
        ;

        _proto.openPieceDirect = /*#__PURE__*/
        function () {
          var _openPieceDirect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(piece) {
            var _binding$model2,
              _rim2,
              _this4 = this,
              _this$currentBinding$5,
              _this$currentBinding5,
              _this$currentBinding$6,
              _this$currentBinding6;
            var n, binding, rotP, levelP, absDist, moveNode, anchorNode, dirXZ, finalWorldPos;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(this.fsm !== State.Idle)) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 2:
                  if (piece) {
                    _context5.next = 4;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 4:
                  // биндинг
                  n = piece;
                  binding = null;
                  while (n && !binding) {
                    binding = n.getComponent(ClickMoveBinding) || null;
                    if (!binding) n = n.parent;
                  }
                  if (!(!binding || !n)) {
                    _context5.next = 9;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 9:
                  this.currentPiece = n;
                  this.currentBinding = binding;
                  this.currentModel = (_binding$model2 = binding.model) != null ? _binding$model2 : n;
                  this.currentRim = (_rim2 = binding.rim) != null ? _rim2 : null;
                  if (this.currentRim) this.currentRim.active = false;
                  this.lockControls();

                  // 1) Align (поворот + уровень)
                  this.fsm = State.Aligning;
                  rotP = this.rotateTowerToFaceCamera(n);
                  levelP = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    var _this4$currentModel, ok, _this4$currentModel$n, _this4$currentModel2;
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!_this4.heightScroll) {
                            _context4.next = 5;
                            break;
                          }
                          _context4.next = 3;
                          return _this4.heightScroll.scrollToNodeOrAncestorLevelSafe((_this4$currentModel = _this4.currentModel) != null ? _this4$currentModel : n, {
                            duration: _this4.heightCenterDuration,
                            easing: 'quadOut',
                            clamp: true
                          });
                        case 3:
                          ok = _context4.sent;
                          if (!ok) {
                            // eslint-disable-next-line no-console
                            console.warn('[GCM3D] Не удалось определить уровень для модели/родителей:', (_this4$currentModel$n = (_this4$currentModel2 = _this4.currentModel) == null ? void 0 : _this4$currentModel2.name) != null ? _this4$currentModel$n : n.name);
                          }
                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  }))();
                  _context5.next = 20;
                  return Promise.all([rotP, levelP]);
                case 20:
                  // 2) RimOn + SlideOut (к камере)
                  this.fsm = State.SlideOut;
                  if (this.currentRim) this.currentRim.active = true;
                  this.currentBinding.ensureCaptured();
                  absDist = this.computeAbsDistanceForPiece(n, Math.abs(this.baseSlideDistance));
                  this.lastDistanceUsed = absDist;
                  moveNode = this.getMoveNodeForBinding(this.currentBinding, n);
                  anchorNode = this.currentModel || n;
                  dirXZ = this.computeDirToCameraXZ(anchorNode);
                  finalWorldPos = this.computeFinalPosForAnchorAlong(moveNode, anchorNode, dirXZ, this.lastDistanceUsed);
                  (_this$currentBinding$5 = (_this$currentBinding5 = this.currentBinding).logWorld) == null || _this$currentBinding$5.call(_this$currentBinding5, 'SlideOut START (towards camera on XZ)');
                  _context5.next = 32;
                  return this.tweenWorldPositionTo(moveNode, finalWorldPos, this.slideDuration);
                case 32:
                  (_this$currentBinding$6 = (_this$currentBinding6 = this.currentBinding).logWorld) == null || _this$currentBinding$6.call(_this$currentBinding6, 'SlideOut END');

                  // 3) RotateModelOpen
                  this.fsm = State.RotateModelOpen;
                  if (!this.currentModel) {
                    _context5.next = 37;
                    break;
                  }
                  _context5.next = 37;
                  return this.rotateModelTo(this.currentModel, this.openYawDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 37:
                  // 4) LockedOut
                  this.fsm = State.LockedOut;
                  return _context5.abrupt("return", true);
                case 39:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function openPieceDirect(_x3) {
            return _openPieceDirect.apply(this, arguments);
          }
          return openPieceDirect;
        }() // === [PUBLIC] Закрыть если выдвинуто → открыть случайный ===
        ;

        _proto.toggleOrOpenRandom = /*#__PURE__*/
        function () {
          var _toggleOrOpenRandom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(root) {
            var candidates, pick;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (root) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 2:
                  if (!(this.fsm === State.LockedOut)) {
                    _context6.next = 5;
                    break;
                  }
                  _context6.next = 5;
                  return this.slideInAndUnlock();
                case 5:
                  if (!(this.fsm !== State.Idle)) {
                    _context6.next = 7;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 7:
                  candidates = root.children.filter(function (c) {
                    if (!c.activeInHierarchy) return false;
                    return !!(c.getComponent(ClickMoveBinding) || c.getComponentsInChildren(ClickMoveBinding).length > 0);
                  });
                  if (!(candidates.length === 0)) {
                    _context6.next = 10;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 10:
                  pick = candidates[Math.floor(Math.random() * candidates.length)];
                  return _context6.abrupt("return", this.openPieceDirect(pick));
                case 12:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function toggleOrOpenRandom(_x4) {
            return _toggleOrOpenRandom.apply(this, arguments);
          }
          return toggleOrOpenRandom;
        }();
        _proto.toggleOrOpen = /*#__PURE__*/function () {
          var _toggleOrOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(root) {
            var candidates, pick;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (root) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return", false);
                case 2:
                  if (!(this.fsm === State.LockedOut)) {
                    _context7.next = 5;
                    break;
                  }
                  _context7.next = 5;
                  return this.slideInAndUnlock();
                case 5:
                  if (!(this.fsm !== State.Idle)) {
                    _context7.next = 7;
                    break;
                  }
                  return _context7.abrupt("return", false);
                case 7:
                  candidates = root.children.filter(function (c) {
                    if (!c.activeInHierarchy) return false;
                    return !!(c.getComponent(ClickMoveBinding) || c.getComponentsInChildren(ClickMoveBinding).length > 0);
                  });
                  if (!(candidates.length === 0)) {
                    _context7.next = 10;
                    break;
                  }
                  return _context7.abrupt("return", false);
                case 10:
                  pick = candidates[2];
                  return _context7.abrupt("return", this.openPieceDirect(pick));
                case 12:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function toggleOrOpen(_x5) {
            return _toggleOrOpen.apply(this, arguments);
          }
          return toggleOrOpen;
        }();
        return GlobalClickManager3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotatingRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "heightScroll", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rotateDuration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heightCenterDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "slideDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateDuration", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateEasing", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "baseSlideDistance", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scaleAxis", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Y';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scaleInfluence", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minAbsDistance", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxAbsDistance", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "invertPieceAxis", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "openYawDeg", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "closeYawDeg", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InteractionState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "85bc8piAeJIyrMBDWo80N4k", "InteractionState", undefined);
      var InteractionState = exports('InteractionState', /*#__PURE__*/function () {
        function InteractionState() {}
        /** Подсмотреть, был ли недавно drag (без поглощения флага) */
        InteractionState.peekRecentDrag = function peekRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          if (!this.lastEndWasDragged) return false;
          return Date.now() - this.lastEndAtMs <= windowMs;
        }
        /** Узнать и поглотить флаг "недавний drag", чтобы следующий обработчик его не увидел */;
        InteractionState.consumeRecentDrag = function consumeRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          var ok = this.peekRecentDrag(windowMs);
          if (ok) {
            this.lastEndWasDragged = false;
            this.lastEndAtMs = 0;
          }
          return ok;
        };
        InteractionState.beginGesture = function beginGesture(id, source) {
          if (this.inGesture) return; // уже кто-то ведёт жест — игнор
          this.inGesture = true;
          this.ended = false; // жест начался
          this.activeId = id;
          this.source = source;
          this.draggedInGesture = false;
          this.isRotating = false;
          // сбрасываем latch при старте нового жеста
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState.markDrag = function markDrag(id) {
          if (!this.inGesture || this.ended) return;
          if (this.activeId !== id) return;
          this.draggedInGesture = true;
          this.isRotating = true;
        }

        /**
         * Идемпотентное завершение жеста:
         * - Если жеста уже нет, возвращаем ended:true и пробрасываем wasDragged по "лячу" недавнего драга.
         * - Если это наш жест — завершаем строго и лочим флаг "недавний drag" на DRAG_LATCH_MS.
         * - Если частично совпало (id или source) — мягко завершаем (лечит рассинхроны).
         */;
        InteractionState.tryEndGesture = function tryEndGesture(id, source) {
          // 0) Жеста нет — сообщаем "уже завершено", но учитываем недавний drag
          if (!this.inGesture) {
            return {
              ended: true,
              wasDragged: this.peekRecentDrag()
            };
          }

          // 1) Строгое совпадение: наш id и наш source
          if (this.activeId === id && this.source === source) {
            var wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(wasDragged);
            return {
              ended: true,
              wasDragged: wasDragged
            };
          }

          // 2) Мягкое завершение при частичном совпадении (на случай рассинхрона)
          if (this.source === source || this.activeId === id) {
            var _wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(_wasDragged);
            return {
              ended: true,
              wasDragged: _wasDragged
            };
          }

          // 3) Совсем чужой вызов — игнор
          return {
            ended: false,
            wasDragged: false
          };
        }

        /** Жёсткий сброс до покоя (зови при старте сцены/компонента) */;
        InteractionState.hardReset = function hardReset() {
          this.inGesture = false;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;
          this.ended = true;
          // сбросим latch тоже
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState._finalizeWithLatch = function _finalizeWithLatch(wasDragged) {
          this.inGesture = false;
          this.ended = true;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;

          // зафиксируем "недавний drag" для обработчиков, которые сработают следом
          this.lastEndWasDragged = !!wasDragged;
          this.lastEndAtMs = Date.now();
        };
        return InteractionState;
      }());
      InteractionState.inGesture = false;
      InteractionState.activeId = null;
      InteractionState.source = null;
      InteractionState.draggedInGesture = false;
      InteractionState.isRotating = false;
      // Состояние покоя по умолчанию
      InteractionState.ended = true;
      // === Latch: "недавно был drag" (для гонок между end и обработкой клика)
      InteractionState.lastEndWasDragged = false;
      InteractionState.lastEndAtMs = 0;
      /** Сколько времени считаем событие "недавним" */
      InteractionState.DRAG_LATCH_MS = 160;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ArcTextMesh.ts', './CakeApiExample.ts', './CenterOnTargetAtStart.ts', './ClickMoveBinding.ts', './ColorLibrary.ts', './FreeCamera.ts', './GlobalClickManager.ts', './InteractionState.ts', './PieceSpawner.ts', './PointerIds.ts', './RandomOpenButton.ts', './RotateYByKeys.ts', './ScreenShotExample.ts', './StartApp.ts', './TowerWindowScroller.ts', './UIScaleBounce.ts', './VerticalMoveAroundTarget.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorLibrary.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, Vec3, Component, ColorTextureLibrary, ClickMoveBinding;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "afb06F8c6dL7IKM2pPDv/LO", "PieceSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PieceSpawner = exports('PieceSpawner', (_dec = ccclass('PieceSpawner'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        tooltip: 'Максимум объектов во всей башне (ёмкость). Скролл вниз упирается в это значение.'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Нода камеры (смотрим worldPosition.y)'
      }), _dec5 = property({
        tooltip: 'Гистерезис срабатывания'
      }), _dec6 = property({
        tooltip: 'Имя переменной цвета у материала (albedo/baseColor/…)'
      }), _dec7 = property({
        tooltip: 'Индекс материала в MeshRenderer'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PieceSpawner, _Component);
        function PieceSpawner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // === параметры ===
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalObjects", _descriptor2, _assertThisInitialized(_this));
          // Сколько реально инстансим в пул
          _initializerDefineProperty(_this, "maxTotalObjects", _descriptor3, _assertThisInitialized(_this));
          // Лимит «всей башни»
          _initializerDefineProperty(_this, "objectsPerLevel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angleStep", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseScale", _descriptor6, _assertThisInitialized(_this));
          // scale(0)
          _initializerDefineProperty(_this, "levelScaleFactor", _descriptor7, _assertThisInitialized(_this));
          // scale(n+1) = scale(n) / levelScaleFactor  (масштаб растёт вниз)
          _initializerDefineProperty(_this, "baseHeight", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPadding", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topY", _descriptor10, _assertThisInitialized(_this));
          // верхняя граница (вершина)
          _initializerDefineProperty(_this, "cameraNode", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recycleMargin", _descriptor12, _assertThisInitialized(_this));
          // опционально: цвет/текстуры
          _initializerDefineProperty(_this, "colorUniform", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "materialIndex", _descriptor14, _assertThisInitialized(_this));
          // === внутреннее состояние (пул) ===
          /** Кольцо полных уровней (каждый по objectsPerLevel). */
          _this.fullRing = [];
          /** Неполный верхний «резерв» — показывается только на абсолютной вершине (offset==0). */
          _this.reserveTop = [];
          _this.K = 0;
          // число полных уровней в пуле
          _this.reserveCount = 0;
          // размер неполного уровня из пула
          _this.ringTopAbsOffset = 0;
          // сколько уровней «ушли вниз» от вершины
          // === разбиение максимальной башни (для лимита) ===
          _this.Kmax = 0;
          _this.reserveMax = 0;
          // — кэш для формул —
          _this.r = 1;
          // r = 1 / levelScaleFactor
          _this.h0 = 0;
          // h0 = baseHeight * baseScale
          _this.oneMinusR = 0;
          return _this;
        }
        var _proto = PieceSpawner.prototype;
        // 1 - r
        // === lifecycle ===
        _proto.start = function start() {
          this.initMath();
          this.buildInitialPool();
        }

        // === оптимизированный update: максимум 1 рецикл за кадр ===
        ;

        _proto.update = function update() {
          if (!this.cameraNode) return;
          var camY = this.cameraNode.worldPosition.y;
          var topAbs = this.isAtApex() ? 0 : this.ringTopAbsOffset;

          // СПУСК: шаг вниз, если не дошли до «дна» макс-башни
          if (camY < this.levelBottomY(topAbs) - this.recycleMargin) {
            this.scrollDownOneLevel();
            this.applyTransforms(); // пересчитали трансформы и выведем «сколько осталось»
            return;
          }

          // ПОДЪЁМ: шаг вверх (не выше вершины)
          if (this.ringTopAbsOffset > 0) {
            var prevAbs = this.ringTopAbsOffset - 1;
            if (camY > this.levelTopY(prevAbs) + this.recycleMargin) {
              this.scrollUpOneLevel();
              this.applyTransforms();
              return;
            }
          }
        }

        // === математика (O(1) формулы) ===
        ;

        _proto.initMath = function initMath() {
          this.r = this.levelScaleFactor > 0 ? 1 / this.levelScaleFactor : 1;
          this.h0 = this.baseHeight * this.baseScale;
          this.oneMinusR = 1 - this.r;
        };
        _proto.isAtApex = function isAtApex() {
          return this.ringTopAbsOffset === 0;
        }

        /** scale(abs) = baseScale * r^abs */;
        _proto.levelScaleAbs = function levelScaleAbs(abs) {
          return this.baseScale * Math.pow(this.r, abs);
        }
        /** Толщина уровня (включая паддинг) */;
        _proto.levelThicknessAbs = function levelThicknessAbs(abs) {
          return this.baseHeight * this.levelScaleAbs(abs) + this.levelPadding;
        }
        /**
         * S(n): смещение от вершины до верха уровня n (по верхним граням), n >= 0.
         * r != 1: S(n) = h0 * (1 - r^n) / (1 - r) + n * levelPadding
         * r == 1: S(n) = n * (h0 + levelPadding)
         */;
        _proto.cumulativeYOffsetAbs = function cumulativeYOffsetAbs(n) {
          if (n <= 0) return 0;
          if (this.r === 1 || this.oneMinusR === 0) {
            return n * (this.h0 + this.levelPadding);
          }
          var rn = Math.pow(this.r, n);
          return this.h0 * (1 - rn) / this.oneMinusR + n * this.levelPadding;
        };
        _proto.levelTopY = function levelTopY(abs) {
          return this.topY - this.cumulativeYOffsetAbs(abs);
        };
        _proto.levelBottomY = function levelBottomY(abs) {
          return this.topY - this.cumulativeYOffsetAbs(abs + 1);
        }

        // === построение пула ===
        ;

        _proto.buildInitialPool = function buildInitialPool() {
          if (!this.prefab) {
            console.warn('Prefab не назначен!');
            return;
          }
          var per = Math.max(1, this.objectsPerLevel);

          // Пул (реально создаваемые объекты)
          this.K = Math.floor(this.totalObjects / per);
          this.reserveCount = this.totalObjects % per;

          // Максимальная башня (для лимита)
          var maxTotalClamped = Math.max(this.maxTotalObjects, this.totalObjects);
          this.Kmax = Math.floor(maxTotalClamped / per);
          this.reserveMax = maxTotalClamped % per;
          this.fullRing = Array.from({
            length: this.K
          }, function () {
            return [];
          });
          this.reserveTop = [];

          // Инстанцируем пул
          var all = [];
          for (var i = 0; i < this.totalObjects; i++) {
            var obj = instantiate(this.prefab);
            obj.setParent(this.node);
            obj.active = true;
            var binding = obj.getComponent(ClickMoveBinding);
            if (binding != null && binding.meshRenderer && ColorTextureLibrary.instance) {
              ColorTextureLibrary.instance.applyRandomSet(binding.meshRenderer, this.materialIndex);
            }
            all.push(obj);
          }

          // Разложить: сначала неполный верх, затем полные уровни
          var p = 0;
          for (var _i = 0; _i < this.reserveCount; _i++) this.reserveTop.push(all[p++]);
          for (var L = 0; L < this.K; L++) {
            var arr = [];
            for (var j = 0; j < per; j++) arr.push(all[p++]);
            this.fullRing[L] = arr;
          }
          this.ringTopAbsOffset = 0;
          this.applyTransforms();
        }

        // === «дно» по максимальной башне ===
        ;

        _proto.totalAbsoluteLevelsMax = function totalAbsoluteLevelsMax() {
          return this.Kmax + (this.reserveMax > 0 ? 1 : 0); // Kmax полных + (возможный) неполный верх
        }
        /** Максимальный допустимый offset вниз (с учётом окна размера K из пула). */;
        _proto.maxRingOffset = function maxRingOffset() {
          if (this.K === 0) return 0; // нет полных уровней в пуле — листать вниз нельзя
          return Math.max(0, this.totalAbsoluteLevelsMax() - this.K);
        }

        // === прокрутка по 1 уровню ===
        ;

        _proto.scrollDownOneLevel = function scrollDownOneLevel() {
          var maxOffset = this.maxRingOffset();
          if (this.ringTopAbsOffset >= maxOffset) return; // достигли «дна»

          if (this.isAtApex()) {
            this.ringTopAbsOffset = 1; // ушли с вершины
            return;
          }
          if (this.K > 0 && this.fullRing.length > 0) {
            var moved = this.fullRing.shift();
            if (moved) this.fullRing.push(moved);
            this.ringTopAbsOffset = Math.min(this.ringTopAbsOffset + 1, maxOffset);
          } else {
            this.ringTopAbsOffset = Math.min(this.ringTopAbsOffset + 1, maxOffset);
          }
        };
        _proto.scrollUpOneLevel = function scrollUpOneLevel() {
          if (this.ringTopAbsOffset <= 0) return;
          if (this.ringTopAbsOffset === 1) {
            this.ringTopAbsOffset = 0; // возвращаемся к вершине (резерв снова виден)
            return;
          }
          if (this.K > 0 && this.fullRing.length > 0) {
            var moved = this.fullRing.pop();
            if (moved) this.fullRing.unshift(moved);
            this.ringTopAbsOffset = Math.max(0, this.ringTopAbsOffset - 1);
          } else {
            this.ringTopAbsOffset = 0;
          }
        }

        // === применение трансформов + единичный лог «сколько осталось до лимита» ===
        ;

        _proto.applyTransforms = function applyTransforms() {
          var per = Math.max(1, this.objectsPerLevel);

          // Резерв вершины (виден только на вершине)
          if (this.reserveTop.length > 0) {
            var active = this.isAtApex();
            var abs = 0;
            var yTop = this.levelTopY(abs);
            var s = this.levelScaleAbs(abs);
            for (var i = 0; i < this.reserveTop.length; i++) {
              var obj = this.reserveTop[i];
              obj.active = active;
              if (active) {
                obj.setPosition(new Vec3(0, yTop, 0));
                obj.setRotationFromEuler(new Vec3(0, i * this.angleStep, 0));
                obj.setScale(s, s, s);
              }
            }
          }

          // Полные уровни
          for (var _i2 = 0; _i2 < this.fullRing.length; _i2++) {
            var _abs = this.isAtApex() ? 1 + _i2 : this.ringTopAbsOffset + _i2;
            var _yTop = this.levelTopY(_abs);
            var _s = this.levelScaleAbs(_abs);
            var nodes = this.fullRing[_i2];
            for (var j = 0; j < nodes.length; j++) {
              var _obj = nodes[j];
              _obj.active = true;
              _obj.setPosition(new Vec3(0, _yTop, 0));
              _obj.setRotationFromEuler(new Vec3(0, j * this.angleStep, 0));
              _obj.setScale(_s, _s, _s);
            }
          }

          // === единственный лог: сколько объектов осталось до лимита ===
          // нижний видимый абсолютный уровень:
          var bottomAbs = this.isAtApex() ? this.fullRing.length // резерв (abs=0) + full[0..len-1] => нижний abs = len
          : this.ringTopAbsOffset + this.fullRing.length - 1;

          // сколько «покрыто» объектов от вершины до текущего низа:
          //   резерв даёт reserveCount на abs=0, дальше каждый уровень по per на abs=1..bottomAbs
          var usedObjects = this.reserveCount + Math.max(0, bottomAbs) * per;
          var left = Math.max(0, Math.max(this.maxTotalObjects, this.totalObjects) - usedObjects);
          console.log("\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0434\u043E \u043B\u0438\u043C\u0438\u0442\u0430: " + left);
        };
        return PieceSpawner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "totalObjects", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxTotalObjects", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelScaleFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "levelPadding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "topY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "recycleMargin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'albedo';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PointerIds.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "13922PSQAhJcJjhZ5FF88EN", "PointerIds", undefined);
      // PointerIds.ts
      var MOUSE_ID = exports('MOUSE_ID', -1); // ������ �������� ������
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RandomOpenButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalClickManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, GlobalClickManager3D;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GlobalClickManager3D = module.GlobalClickManager3D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6a522r13OFAKqKll7GvHcNg", "RandomOpenButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RandomOpenButton = exports('RandomOpenButton', (_dec = ccclass('RandomOpenButton'), _dec2 = property({
        type: GlobalClickManager3D,
        tooltip: '������ �� GlobalClickManager3D �� �����'
      }), _dec3 = property({
        type: Node,
        tooltip: '������, ��� ����� ������������ ������� (parent � PieceSpawner)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RandomOpenButton, _Component);
        function RandomOpenButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clickManager", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecesRoot", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RandomOpenButton.prototype;
        /** ���������� ������ (Button -> Click Events -> this -> onClick) */
        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ok;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.clickManager || !this.piecesRoot)) {
                    _context.next = 3;
                    break;
                  }
                  console.warn('[RandomOpenButton] �� ������ clickManager ��� piecesRoot');
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return this.clickManager.toggleOrOpenRandom(this.piecesRoot);
                case 5:
                  ok = _context.sent;
                  if (!ok) console.log('[RandomOpenButton] �� ������� ������� ��������� �������.');
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        _proto.onClickMy = /*#__PURE__*/function () {
          var _onClickMy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var ok;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.clickManager || !this.piecesRoot)) {
                    _context2.next = 3;
                    break;
                  }
                  console.warn('[RandomOpenButton] �� ������ clickManager ��� piecesRoot');
                  return _context2.abrupt("return");
                case 3:
                  _context2.next = 5;
                  return this.clickManager.toggleOrOpen(this.piecesRoot);
                case 5:
                  ok = _context2.sent;
                  if (!ok) console.log('[RandomOpenButton] �� ������� ������� ��������� �������.');
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickMy() {
            return _onClickMy.apply(this, arguments);
          }
          return onClickMy;
        }();
        return RandomOpenButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "piecesRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateYByKeys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, input, Input, KeyCode, Component, InteractionState, MOUSE_ID;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "717452jV8ZDv7JZnElpm+X0", "RotateYByKeys", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotateYByKeys = exports('RotateYByKeys', (_dec = ccclass('RotateYByKeys'), _dec2 = property({
        tooltip: 'Скорость вращения от клавиш (град/сек)'
      }), _dec3 = property({
        tooltip: 'Чувствительность драга: градусов на 1 пиксель'
      }), _dec4 = property({
        tooltip: 'Порог пикселей, после которого считаем жест drag'
      }), _dec5 = property({
        tooltip: 'Мёртвая зона по углу: пока |Δугол| меньше — не вращаем'
      }), _dec6 = property({
        tooltip: 'Плавность вращения (сек) — и разгон, и отпускание'
      }), _dec7 = property({
        tooltip: 'Инвертировать направление вращения'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateYByKeys, _Component);
        function RotateYByKeys() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "degPerPixel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragThreshold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startMoveOffsetDeg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angularSmoothTime", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invert", _descriptor6, _assertThisInitialized(_this));
          // --- клавиатура
          _this.keyDir = 0;
          _this.kbAccumDeg = 0;
          _this.kbActive = false;
          // --- тач
          _this.activeTouchId = null;
          _this.touchStartX = null;
          _this.touchLastX = null;
          _this.touchDragging = false;
          _this.touchAccumDeg = 0;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // --- мышь
          _this.mouseHeld = false;
          _this.mouseStartX = null;
          _this.mouseLastX = null;
          _this.mouseDragging = false;
          _this.mouseAccumDeg = 0;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // --- инерция
          _this.angVel = 0;
          // град/сек
          _this.pendingDegFromPointer = 0;
          return _this;
        }
        var _proto = RotateYByKeys.prototype;
        // градусы за кадр из поинтера
        _proto._resetInteractionIfStuck = function _resetInteractionIfStuck() {
          InteractionState.hardReset();
        }

        /** Остановить инерцию и сбросить накопленный ввод указателя (для автоповорота). */;
        _proto.stopInertia = function stopInertia() {
          this.angVel = 0;
          this.pendingDegFromPointer = 0;
          this.keyDir = 0;
          this.kbAccumDeg = 0;
          this.kbActive = false;
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onEnable = function onEnable() {
          this._resetInteractionIfStuck();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        // === клавиатура
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_A) this.keyDir = -1;else if (e.keyCode === KeyCode.KEY_D) this.keyDir = 1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var wasDir = e.keyCode === KeyCode.KEY_A && this.keyDir === -1 || e.keyCode === KeyCode.KEY_D && this.keyDir === 1;
          if (wasDir) {
            this.keyDir = 0;
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
        }

        // === тач (ленивый захват)
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.activeTouchId !== null) return;
          var id = e.getID();
          this.activeTouchId = id;
          var x = e.getLocationX();
          this.touchStartX = x;
          this.touchLastX = x;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.activeTouchId !== id || this.touchLastX === null || this.touchStartX === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.touchLastX;
          var totalPx = x - this.touchStartX;
          this.touchLastX = x;
          if (!this.touchDragging && Math.abs(totalPx) >= this.dragThreshold) this.touchDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.touchActive) {
            this.touchAccumDeg += dxIncDeg;
            if (this.touchDragging && Math.abs(this.touchAccumDeg) >= this.startMoveOffsetDeg) {
              if (!InteractionState.inGesture) {
                this.touchActive = true;
                InteractionState.beginGesture(id, 'touch');
                this.touchClaimed = true;
                InteractionState.markDrag(id);
              } else {
                return;
              }
            } else {
              return;
            }
          }
          if (this.touchClaimed) {
            this.pendingDegFromPointer += dxIncDeg;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        // === мышь (ленивый захват)
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = true;
          var x = e.getLocationX();
          this.mouseStartX = x;
          this.mouseLastX = x;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastX === null || this.mouseStartX === null) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.mouseLastX;
          var totalPx = x - this.mouseStartX;
          this.mouseLastX = x;
          if (!this.mouseDragging && Math.abs(totalPx) >= this.dragThreshold) this.mouseDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.mouseActive) {
            this.mouseAccumDeg += dxIncDeg;
            if (this.mouseDragging && Math.abs(this.mouseAccumDeg) >= this.startMoveOffsetDeg) {
              this.mouseActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(MOUSE_ID, 'mouse');
                this.mouseClaimed = true;
              }
              InteractionState.markDrag(MOUSE_ID);
            } else {
              return;
            }
          }
          this.pendingDegFromPointer += dxIncDeg;
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartX = this.mouseLastX = null;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        }

        // === апдейт / инерция
        ;

        _proto.update = function update(dt) {
          var sign = this.invert ? -1 : 1;
          if (this.keyDir !== 0) {
            if (!this.kbActive) {
              this.kbAccumDeg += Math.abs(this.rotateSpeed * dt);
              if (this.kbAccumDeg >= this.startMoveOffsetDeg) this.kbActive = true;
            }
          } else {
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
          var keyboardTargetVel = this.keyDir !== 0 && this.kbActive ? this.rotateSpeed * this.keyDir * sign : 0;
          var pointerTargetVel = this.pendingDegFromPointer / Math.max(dt, 1e-5);
          this.pendingDegFromPointer = 0;
          var targetVel = keyboardTargetVel + pointerTargetVel;
          var k = this.angularSmoothTime > 0 ? 1 - Math.exp(-dt / this.angularSmoothTime) : 1;
          this.angVel += (targetVel - this.angVel) * k;
          if (this.angVel !== 0) {
            var euler = this.node.eulerAngles;
            euler.y += this.angVel * dt;
            this.node.setRotationFromEuler(euler);
          }
          var localActive = this.mouseActive || this.touchActive || this.keyDir !== 0 && this.kbActive;
          if (!InteractionState.inGesture && !localActive && InteractionState.isRotating) {
            InteractionState.isRotating = false;
          }
          if (!localActive && Math.abs(this.angVel) < 0.05) this.angVel = 0;
        };
        return RotateYByKeys;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "degPerPixel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMoveOffsetDeg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angularSmoothTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "invert", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScreenShotExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Sprite, log, find, Node, UITransform, Component, SpriteFrame, view, RenderTexture, director, Director, warn, error;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Sprite = module.Sprite;
      log = module.log;
      find = module.find;
      Node = module.Node;
      UITransform = module.UITransform;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
      view = module.view;
      RenderTexture = module.RenderTexture;
      director = module.director;
      Director = module.Director;
      warn = module.warn;
      error = module.error;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d8c3ay0WUpPfo/zGfPTP0MY", "ScreenShotExample", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RTDebugger = exports('RTDebugger', (_dec = ccclass('RTDebugger'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RTDebugger, _Component);
        function RTDebugger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetSprite", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RTDebugger.prototype;
        _proto.onLoad = function onLoad() {
          log('[RTDebugger] onLoad');
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          log('[RTDebugger] onEnable');
          // ��������� ����� ������/������ �������������, ���� �� ���������
          if (!this.camera) {
            var camNode = find('Main Camera') || find('Camera') || null;
            if (camNode) this.camera = camNode.getComponent(Camera);
          }
          if (!this.targetSprite) {
            // �������� ������ �� ����� ��� �����������
            var n = new Node('RT-Preview');
            n.setParent(this.node.scene);
            var ui = n.addComponent(UITransform);
            ui.setAnchorPoint(0.5, 0.5);
            n.setPosition(0, 0, 0);
            this.targetSprite = n.addComponent(Sprite);
            log('[RTDebugger] ������ targetSprite ���� RT-Preview');
          }

          // ���� ������ ���� �� ������������� � ��������� ������
          this.scheduleOnce(function () {
            return _this2.capture();
          }, 0.1);
        };
        _proto.capture = /*#__PURE__*/function () {
          var _capture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _view$getCanvasSize, width, height, rt, sf, ui;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log('[RTDebugger] capture() start');
                  if (this.camera) {
                    _context.next = 4;
                    break;
                  }
                  error('[RTDebugger] ������ �� ���������/�� �������');
                  return _context.abrupt("return");
                case 4:
                  if (!this.camera.enabledInHierarchy) {
                    warn('[RTDebugger] ������ ���������');
                  }
                  if (this.targetSprite) {
                    _context.next = 8;
                    break;
                  }
                  error('[RTDebugger] targetSprite �����������');
                  return _context.abrupt("return");
                case 8:
                  _view$getCanvasSize = view.getCanvasSize(), width = _view$getCanvasSize.width, height = _view$getCanvasSize.height;
                  log("[RTDebugger] canvas size = " + width + "x" + height);
                  rt = new RenderTexture();
                  rt.reset({
                    width: width,
                    height: height
                  });
                  this.camera.targetTexture = rt;
                  log('[RTDebugger] targetTexture ��������, ��� ���� �������');

                  // ��� ���������� ��������� �����
                  _context.next = 16;
                  return new Promise(function (resolve) {
                    var once = function once() {
                      director.off(Director.EVENT_AFTER_DRAW, once);
                      resolve();
                    };
                    director.on(Director.EVENT_AFTER_DRAW, once);
                  });
                case 16:
                  log('[RTDebugger] EVENT_AFTER_DRAW �������');
                  sf = new SpriteFrame();
                  sf.texture = rt;
                  // ���� ����� ����� ������, ��������������:
                  // (������ API ����������, �������� ���� ��)
                  // (sf as any).flipUVY = true; // ���� sf.setFlipUVY?.(true);

                  // ����������� ������� ������ �������
                  ui = this.targetSprite.getComponent(UITransform) || this.targetSprite.addComponent(UITransform);
                  this.targetSprite.sizeMode = Sprite.SizeMode.RAW;
                  ui.setContentSize(width, height);
                  this.targetSprite.spriteFrame = sf;
                  log('[RTDebugger] spriteFrame ��������');

                  // ���������� ����� ������ �� ����� (�����������)
                  this.camera.targetTexture = null;
                  log('[RTDebugger] capture() done');
                case 26:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function capture() {
            return _capture.apply(this, arguments);
          }
          return capture;
        }();
        return RTDebugger;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartApp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "03b4cr8mr5ANqGQ5koPtIAX", "StartApp", undefined);
      var ccclass = _decorator.ccclass;
      var UncapFPS = exports('UncapFPS', (_dec = ccclass('UncapFPS'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UncapFPS, _Component);
        function UncapFPS() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UncapFPS.prototype;
        _proto.start = function start() {
          // ������ 240 fps (������� "��������")
          // ������ ���������� �������� �� ����������� ��������� ������� �������
          game.setFrameRate(240);
        };
        return UncapFPS;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TowerWindowScroller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './ColorLibrary.ts', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Label, input, Input, instantiate, Vec3, tween, KeyCode, Component, ClickMoveBinding, ColorTextureLibrary, InteractionState, MOUSE_ID$1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      input = module.input;
      Input = module.Input;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID$1 = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class4, _class5, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _dec32, _dec33, _dec34, _class7, _class8, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "d5a97BCq2NCfJoxNmjFR4k/", "TowerWindowScroller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // fallback, если нет PointerIds
      var MOUSE_ID = MOUSE_ID$1;

      /** ------- ГРУППА: Scroll ------- */
      var TVS_Scroll = exports('TVS_Scroll', (_dec = ccclass('TVS_Scroll'), _dec2 = property({
        tooltip: 'Стартовый offset (ед.)'
      }), _dec3 = property({
        tooltip: 'Мин. offset'
      }), _dec4 = property({
        tooltip: 'Макс. offset'
      }), _dec5 = property({
        tooltip: 'Ед. offset на пиксель драга'
      }), _dec6 = property({
        tooltip: 'Ед. offset на шаг колёсика (120 тиков)'
      }), _dec7 = property({
        tooltip: 'Порог пикселей, после которого считаем drag и захватываем жест'
      }), _dec8 = property({
        tooltip: 'Включить инерционный доезд'
      }), _dec9 = property({
        tooltip: 'Коэф. трения (1/сек): больше — быстрее останавливается'
      }), _dec10 = property({
        tooltip: 'Порог остановки (ед./сек)'
      }), _dec11 = property({
        tooltip: 'Сила «пинка» от колеса (в скорость)'
      }), _dec12 = property({
        tooltip: 'Максимальная скорость инерции/клавиш (ед./сек)'
      }), _dec13 = property({
        tooltip: 'Deadzone для колеса (ед. offset), пока не наберём — скролл не стартует'
      }), _dec14 = property({
        tooltip: 'Сброс deadzone, если колёсико молчит (мс)'
      }), _dec15 = property({
        tooltip: 'Ускорение при удержании W/S (ед./сек^2)'
      }), _dec16 = property({
        tooltip: 'Макс. скорость от W/S (если нужно меньше maxInertiaSpeed)'
      }), _dec(_class = (_class2 = function TVS_Scroll() {
        _initializerDefineProperty(this, "startOffset", _descriptor, this);
        _initializerDefineProperty(this, "minOffset", _descriptor2, this);
        _initializerDefineProperty(this, "maxOffset", _descriptor3, this);
        _initializerDefineProperty(this, "unitsPerPixel", _descriptor4, this);
        _initializerDefineProperty(this, "unitsPerWheelTick", _descriptor5, this);
        _initializerDefineProperty(this, "dragThreshold", _descriptor6, this);
        _initializerDefineProperty(this, "enableInertia", _descriptor7, this);
        _initializerDefineProperty(this, "friction", _descriptor8, this);
        _initializerDefineProperty(this, "stopVelocity", _descriptor9, this);
        _initializerDefineProperty(this, "wheelKick", _descriptor10, this);
        _initializerDefineProperty(this, "maxInertiaSpeed", _descriptor11, this);
        // --- Колесо: deadzone ---
        _initializerDefineProperty(this, "wheelDeadzoneUnits", _descriptor12, this);
        _initializerDefineProperty(this, "wheelDeadzoneResetMs", _descriptor13, this);
        // --- Клавиши W/S: профиль разгона ---
        _initializerDefineProperty(this, "keyAccel", _descriptor14, this);
        _initializerDefineProperty(this, "keyMaxSpeed", _descriptor15, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startOffset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minOffset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1e12;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1e12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerPixel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerWheelTick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enableInertia", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "friction", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stopVelocity", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.002;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wheelKick", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20.0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxInertiaSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneUnits", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneResetMs", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "keyAccel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "keyMaxSpeed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      /** ------- ГРУППА: Spawn & Layout ------- */
      var TVS_SpawnLayout = exports('TVS_SpawnLayout', (_dec17 = ccclass('TVS_SpawnLayout'), _dec18 = property({
        type: Prefab
      }), _dec19 = property({
        tooltip: 'Базовый масштаб геометрии префаба (Node.scale = 1 → это baseScale префаба)'
      }), _dec20 = property({
        tooltip: 'Базовая геометрическая высота куска (до масштабов префаба и Node.scale)'
      }), _dec21 = property({
        tooltip: 'Целевой экранный масштаб «базового» куска'
      }), _dec22 = property({
        tooltip: 'Визуальный зазор между уровнями (в ед.: baseHeight * Node.scale)'
      }), _dec23 = property({
        tooltip: 'Якорь Y (локально) — центр окна'
      }), _dec24 = property({
        tooltip: 'Интенсивность градиента масштаба (0..1). 0 — одинаковые; 1 — максимум.'
      }), _dec25 = property({
        tooltip: 'Коэф. по слоям r: r<1 — вниз мельче; r>1 — вниз крупнее.'
      }), _dec26 = property({
        tooltip: 'Включить кламп масштаба каждого куска'
      }), _dec27 = property({
        tooltip: 'Минимальный Node.scale'
      }), _dec28 = property({
        tooltip: 'Максимальный Node.scale'
      }), _dec29 = property({
        tooltip: 'Индекс материала внутри MeshRenderer'
      }), _dec30 = property({
        tooltip: 'Фолбэк: число наборов в библиотеке, если она сама не сообщает'
      }), _dec31 = property({
        type: Label,
        tooltip: 'Куда выводить глобальный счётчик пройденных кусочков'
      }), _dec17(_class4 = (_class5 = function TVS_SpawnLayout() {
        _initializerDefineProperty(this, "prefab", _descriptor16, this);
        _initializerDefineProperty(this, "objectsPerLevel", _descriptor17, this);
        _initializerDefineProperty(this, "visibleLevels", _descriptor18, this);
        _initializerDefineProperty(this, "angleStep", _descriptor19, this);
        _initializerDefineProperty(this, "baseScale", _descriptor20, this);
        _initializerDefineProperty(this, "baseHeight", _descriptor21, this);
        _initializerDefineProperty(this, "targetVisualScale", _descriptor22, this);
        _initializerDefineProperty(this, "levelPaddingVisual", _descriptor23, this);
        _initializerDefineProperty(this, "anchorY", _descriptor24, this);
        _initializerDefineProperty(this, "scaleInWindow", _descriptor25, this);
        _initializerDefineProperty(this, "r", _descriptor26, this);
        _initializerDefineProperty(this, "enableScaleClamp", _descriptor27, this);
        _initializerDefineProperty(this, "minScale", _descriptor28, this);
        _initializerDefineProperty(this, "maxScale", _descriptor29, this);
        _initializerDefineProperty(this, "materialIndex", _descriptor30, this);
        _initializerDefineProperty(this, "colorSetsFallback", _descriptor31, this);
        _initializerDefineProperty(this, "counterLabel", _descriptor32, this);
      }, (_descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "prefab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "visibleLevels", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "baseScale", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class5.prototype, "baseHeight", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class5.prototype, "targetVisualScale", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class5.prototype, "levelPaddingVisual", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class5.prototype, "anchorY", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class5.prototype, "scaleInWindow", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class5.prototype, "r", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class5.prototype, "enableScaleClamp", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class5.prototype, "minScale", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class5.prototype, "maxScale", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class5.prototype, "materialIndex", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class5.prototype, "colorSetsFallback", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 16;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class5.prototype, "counterLabel", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));

      /**
       * TowerVirtualScroller — виртуальный «бесконечный» скролл башни.
       */
      var TowerVirtualScroller = exports('TowerVirtualScroller', (_dec32 = ccclass('TowerVirtualScroller'), _dec33 = property({
        type: TVS_Scroll
      }), _dec34 = property({
        type: TVS_SpawnLayout
      }), _dec32(_class7 = (_class8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerVirtualScroller, _Component);
        function TowerVirtualScroller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // -------- Параметры в инспекторе (группы) --------
          _initializerDefineProperty(_this, "scroll", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spawn", _descriptor34, _assertThisInitialized(_this));
          // -------- Внутреннее: SPAWN/LAYOUT --------
          _this.pool = [];
          _this.lastKeyByNode = new Map();
          _this.lastTopBase = Number.NaN;
          _this.passedPieces = 0;
          // карта уровней для узлов пула
          _this.nodeLevelInfo = new Map();
          // -------- Внутреннее: SCROLL & inertia --------
          _this.offset = 0;
          // жест мыши
          _this.mouseHeld = false;
          _this.mouseStartY = null;
          _this.mouseLastY = null;
          _this.mouseDragging = false;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // жест тач
          _this.touchId = null;
          _this.touchStartY = null;
          _this.touchLastY = null;
          _this.touchDragging = false;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // инерция / скорость
          _this.velocity = 0;
          // ед./сек
          _this.inertiaActive = false;
          // семплы для расчёта начальной инерции после драга
          _this.moveSamples = [];
          _this.maxSamples = 6;
          // колесо: накопление для deadzone
          _this.wheelAccumUnits = 0;
          _this.wheelDeadzoneLastTs = 0;
          // клавиши
          _this.keyHeldW = false;
          _this.keyHeldS = false;
          _this.scrollTween = null;
          return _this;
        }
        var _proto = TowerVirtualScroller.prototype;
        // ===== lifecycle =====
        _proto.onEnable = function onEnable() {
          InteractionState.hardReset();
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.start = function start() {
          this.buildPool();
          this.offset = this.clamp(this.scroll.startOffset, this.scroll.minOffset, this.scroll.maxOffset);
          this.layoutByOffset(true);
        };
        _proto.update = function update(dt) {
          // если сейчас идёт жест мышью/тачем — скоростью не управляем (скролл идёт из onMove)
          var interacting = this.mouseHeld || this.mouseDragging || this.mouseActive || this.touchId !== null || this.touchDragging || this.touchActive;
          if (interacting) {
            this.inertiaActive = false;
            return;
          }

          // ---- клавиатура: разгон по удержанию ----
          var inputAccel = 0;
          if (this.keyHeldW) inputAccel -= this.scroll.keyAccel;
          if (this.keyHeldS) inputAccel += this.scroll.keyAccel;

          // если есть ускорение от клавиш — включаем «круиз» через скорость
          if (inputAccel !== 0) {
            this.velocity += inputAccel * dt;
            var vmax = Math.min(this.scroll.keyMaxSpeed, this.scroll.maxInertiaSpeed);
            this.velocity = this.clamp(this.velocity, -vmax, vmax);
            this.inertiaActive = true;
          }

          // если нет инерции и скорости — нечего обновлять
          if (!this.inertiaActive && Math.abs(this.velocity) < this.scroll.stopVelocity) return;

          // интеграция позиции
          var prev = this.offset;
          this.offset = this.clamp(this.offset + this.velocity * dt, this.scroll.minOffset, this.scroll.maxOffset);

          // если упёрлись в границы — гасим скорость наружу, чтобы не дрожало
          if (this.offset <= this.scroll.minOffset && this.velocity < 0) this.velocity = 0;
          if (this.offset >= this.scroll.maxOffset && this.velocity > 0) this.velocity = 0;

          // затухание скорости (трение)
          var decay = Math.exp(-this.scroll.friction * dt);
          this.velocity *= decay;

          // условие остановки (только если не удерживаем клавиши)
          if (inputAccel === 0 && Math.abs(this.velocity) < this.scroll.stopVelocity) {
            this.velocity = 0;
            this.inertiaActive = false;
          }
          if (this.offset !== prev) this.layoutByOffset(false);
        }

        // =========================================================================
        // =                           SCROLL + GЕСТURES                            =
        // =========================================================================
        // ===== mouse =====
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          this.mouseHeld = true;
          var y = e.getLocationY();
          this.mouseStartY = y;
          this.mouseLastY = y;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastY === null || this.mouseStartY === null) return;
          var y = e.getLocationY();
          var dy = y - this.mouseLastY;
          var total = y - this.mouseStartY;
          this.mouseLastY = y;
          this.pushSample(y);

          // --- до порога НИЧЕГО не двигаем ---
          if (!this.mouseDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) {
              this.mouseDragging = true;
            } else {
              return; // не прошли deadzone → выходим без applyDeltaUnits
            }
          }

          if (dy === 0) return;
          if (!this.mouseActive) {
            this.mouseActive = true;
            if (!InteractionState.inGesture) {
              InteractionState.beginGesture(MOUSE_ID, 'mouse');
              this.mouseClaimed = true;
            } else {
              return;
            }
            InteractionState.markDrag(MOUSE_ID);
          }
          if (this.mouseClaimed) {
            this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
          }
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartY = this.mouseLastY = null;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();
        }

        // --- колесо: deadzone + инерция через скорость (без мгновенных скачков) ---
        ;

        _proto.onWheel = function onWheel(e) {
          var delta = -e.getScrollY();
          if (delta === 0) return;
          var stepUnits = delta / 120 * this.scroll.unitsPerWheelTick;
          var now = this.nowMs();
          if (now - this.wheelDeadzoneLastTs > this.scroll.wheelDeadzoneResetMs) {
            this.wheelAccumUnits = 0; // давний простой — копим заново
          }

          this.wheelDeadzoneLastTs = now;
          this.wheelAccumUnits += stepUnits;
          var absAccum = Math.abs(this.wheelAccumUnits);
          var dz = Math.max(0, this.scroll.wheelDeadzoneUnits);
          if (absAccum < dz) return;

          // прошли deadzone → преобразуем в «пинок» скорости, без резкого сдвига offset
          var move = this.wheelAccumUnits - Math.sign(this.wheelAccumUnits) * dz;
          this.wheelAccumUnits = 0;
          var kick = this.clamp(move * this.scroll.wheelKick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.velocity = this.clamp(this.velocity + kick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
        }

        // ===== touch =====
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.touchId !== null) return;
          var id = e.getID();
          this.touchId = id;
          var y = e.getLocationY();
          this.touchStartY = y;
          this.touchLastY = y;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.touchId !== id || this.touchLastY === null || this.touchStartY === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var y = e.getLocationY();
          var dy = y - this.touchLastY;
          var total = y - this.touchStartY;
          this.touchLastY = y;
          this.pushSample(y);

          // --- до порога НИЧЕГО не двигаем ---
          if (!this.touchDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) {
              this.touchDragging = true;
            } else {
              return; // не прошли deadzone → выходим без applyDeltaUnits
            }
          }

          if (dy === 0) return;
          if (!this.touchActive) {
            // включаемся только когда реально начался drag (после порога)
            if (!InteractionState.inGesture) {
              this.touchActive = true;
              InteractionState.beginGesture(id, 'touch');
              this.touchClaimed = true;
              InteractionState.markDrag(id);
            } else {
              return;
            }
          }
          if (this.touchClaimed) {
            this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();
        }

        // ===== inertia helpers =====
        ;

        _proto.nowMs = function nowMs() {
          var _ref, _globalThis$performan;
          // @ts-ignore
          return (_ref = (_globalThis$performan = globalThis.performance) == null || _globalThis$performan.now == null ? void 0 : _globalThis$performan.now()) != null ? _ref : Date.now();
        };
        _proto.pushSample = function pushSample(y) {
          var t = this.nowMs();
          this.moveSamples.push({
            t: t,
            y: y
          });
          if (this.moveSamples.length > this.maxSamples) this.moveSamples.shift();
          var last = this.moveSamples[this.moveSamples.length - 1];
          while (this.moveSamples.length > 1 && last.t - this.moveSamples[0].t > 200) {
            this.moveSamples.shift();
          }
        };
        _proto.startInertiaFromSamples = function startInertiaFromSamples() {
          if (!this.scroll.enableInertia) {
            this.moveSamples.length = 0;
            return;
          }
          if (this.moveSamples.length >= 2) {
            var a = this.moveSamples[0];
            var b = this.moveSamples[this.moveSamples.length - 1];
            var dtSec = Math.max(0.001, (b.t - a.t) / 1000);
            var vPxPerSec = (b.y - a.y) / dtSec;
            var vUnitsPerSec = vPxPerSec * this.scroll.unitsPerPixel;
            this.velocity = this.clamp(vUnitsPerSec, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
            this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
          }
          this.moveSamples.length = 0;
        };
        _proto.applyDeltaUnits = function applyDeltaUnits(dUnits) {
          var prev = this.offset;
          this.offset = this.clamp(this.offset + dUnits, this.scroll.minOffset, this.scroll.maxOffset);
          if (this.offset !== prev) this.layoutByOffset(false);
        }

        // =========================================================================
        // =                               SPAWN/LAYOUT                             =
        // =========================================================================
        ;

        _proto.levelStepConst = function levelStepConst() {
          var basePiece = this.spawn.targetVisualScale / Math.max(1e-6, this.spawn.baseScale);
          var baseVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * basePiece;
          return baseVisualHeight + this.spawn.levelPaddingVisual;
        };
        _proto.layoutByOffset = function layoutByOffset(_force) {
          var _this2 = this;
          var stepConst = Math.max(1e-6, this.levelStepConst());

          // depth = offset / stepConst; при depth = целое, уровень depth оказывается на anchorY
          var depth = this.offset / stepConst;
          var topBase = Math.max(0, Math.floor(depth));
          var frac = depth - topBase;
          var per = Math.max(1, this.spawn.objectsPerLevel);
          var newPassed = topBase * per;
          if (newPassed !== this.passedPieces) {
            this.passedPieces = newPassed;
            if (this.spawn.counterLabel) this.spawn.counterLabel.string = "" + this.passedPieces;
          }
          this.lastTopBase = topBase;
          var vis = Math.max(1, this.spawn.visibleLevels);
          var basePiece = this.spawn.targetVisualScale / Math.max(1e-6, this.spawn.baseScale);
          var sGrad = this.spawn.scaleInWindow;
          var rSafe = Math.max(1e-6, this.spawn.r);
          var desiredScaleAtRel = function desiredScaleAtRel(rel) {
            return basePiece * Math.pow(rSafe, -rel * sGrad);
          };
          var clampScale = function clampScale(x) {
            if (!_this2.spawn.enableScaleClamp) return x;
            var lo = Math.min(_this2.spawn.minScale, _this2.spawn.maxScale);
            var hi = Math.max(_this2.spawn.minScale, _this2.spawn.maxScale);
            return Math.min(hi, Math.max(lo, x));
          };
          var relTop = topBase - depth;
          var topScale = clampScale(desiredScaleAtRel(relTop));
          var topVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * topScale;
          var accY = -frac * (topVisualHeight + this.spawn.levelPaddingVisual);
          var idx = 0;
          for (var L = 0; L < vis; L++) {
            var abs = topBase + L;
            var rel = abs - depth;
            var pieceS = clampScale(desiredScaleAtRel(rel));
            var yTop = this.spawn.anchorY - accY;
            for (var j = 0; j < per; j++) {
              var n = this.pool[idx];
              if (!this.spawn.prefab) return;
              if (!n) {
                n = instantiate(this.spawn.prefab);
                n.setParent(this.node);
                n.active = true;
                this.pool[idx] = n;
              } else {
                n.active = true;
              }

              // key для цвета
              var key = abs + ":" + j;
              if (this.lastKeyByNode.get(n) !== key) {
                this.colorAllPiecesForKey(n, key);
                this.lastKeyByNode.set(n, key);
              }

              // позиция/поворот/скейл
              n.setPosition(new Vec3(0, yTop, 0));
              n.setRotationFromEuler(new Vec3(0, j * this.spawn.angleStep, 0));
              n.setScale(pieceS, pieceS, pieceS);

              // трекаем уровень
              this.nodeLevelInfo.set(n, {
                level: abs,
                slot: j
              });
              idx++;
            }
            var visualHeight = this.spawn.baseHeight * this.spawn.baseScale * pieceS;
            accY += visualHeight + this.spawn.levelPaddingVisual;
          }

          // выключаем лишние и чистим карту уровней
          for (; idx < this.pool.length; idx++) {
            var _n = this.pool[idx];
            if (_n) {
              _n.active = false;
              this.nodeLevelInfo["delete"](_n);
            }
          }
        };
        _proto.buildPool = function buildPool() {
          if (!this.spawn.prefab) {
            console.warn('TowerVirtualScroller: prefab не назначен');
            return;
          }
          var need = Math.max(1, this.spawn.visibleLevels) * Math.max(1, this.spawn.objectsPerLevel);
          for (var i = 0; i < need; i++) {
            var n = instantiate(this.spawn.prefab);
            n.setParent(this.node);
            n.active = true;
            this.pool.push(n);
          }
        };
        // ===== ВСПОМОГАТЕЛЬНОЕ: цвета =====
        _proto.hash32str = function hash32str(s) {
          var h = 2166136261 >>> 0;
          for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619);
          }
          return h >>> 0;
        };
        _proto.getSetsCount = function getSetsCount() {
          var _lib$getSetsCount;
          var lib = ColorTextureLibrary == null ? void 0 : ColorTextureLibrary.instance;
          return (_lib$getSetsCount = lib == null || lib.getSetsCount == null ? void 0 : lib.getSetsCount()) != null ? _lib$getSetsCount : this.spawn.colorSetsFallback;
        };
        _proto.applySetIndex = function applySetIndex(mr, materialIndex, setIndex) {
          var lib = ColorTextureLibrary.instance;
          if (!lib) return;
          if (typeof lib.applySetByIndex === 'function') {
            lib.applySetByIndex(mr, materialIndex, setIndex);
          } else {
            // безопасный фолбэк
            lib.applyRandomSet(mr, materialIndex);
          }
        };
        _proto.colorAllPiecesForKey = function colorAllPiecesForKey(root, key) {
          var bindings = root.getComponentsInChildren(ClickMoveBinding);
          var count = this.getSetsCount();
          var k = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(bindings), _step; !(_step = _iterator()).done;) {
            var b = _step.value;
            var mr = b == null ? void 0 : b.meshRenderer;
            if (!mr) continue;
            var idx = count <= 1 ? 0 : this.hash32str(key + "#" + k++) % count;
            this.applySetIndex(mr, this.spawn.materialIndex, idx);
          }
        }

        // ===== util =====
        ;

        _proto.clamp = function clamp(v, a, b) {
          return Math.min(b, Math.max(a, v));
        };
        _proto.getPassedPieces = function getPassedPieces() {
          return this.passedPieces;
        }

        /** ТЕКУЩИЙ шаг уровня в единицах offset. */;
        _proto.getLevelStep = function getLevelStep() {
          return Math.max(1e-6, this.levelStepConst());
        }

        // ===================== ПУБЛИЧНЫЕ API ДЛЯ СКРОЛЛА =========================
        /** Прокрутка к абсолютной высоте (та же шкала, что this.offset). */;
        _proto.scrollToHeight = function scrollToHeight(height, opts) {
          var _this3 = this;
          if (opts === void 0) {
            opts = {};
          }
          var _opts = opts,
            _opts$duration = _opts.duration,
            duration = _opts$duration === void 0 ? 0 : _opts$duration,
            _opts$easing = _opts.easing,
            easing = _opts$easing === void 0 ? 'quadOut' : _opts$easing,
            _opts$clamp = _opts.clamp,
            doClamp = _opts$clamp === void 0 ? true : _opts$clamp;

          // при программном скролле выключаем текущую инерцию/скорость
          this.inertiaActive = false;
          this.velocity = 0;
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          var target = doClamp ? this.clamp(height, this.scroll.minOffset, this.scroll.maxOffset) : height;
          if (duration <= 0) {
            this.offset = target;
            this.layoutByOffset(false);
            return;
          }
          var easeFn = typeof easing === 'function' ? easing : this._getEase(easing);
          var proxy = {
            value: this.offset
          };
          this.scrollTween = tween(proxy).to(duration, {
            value: target
          }, {
            progress: function progress(start, end, _current, t) {
              var et = easeFn(Math.max(0, Math.min(1, t)));
              return start + (end - start) * et;
            },
            onUpdate: function onUpdate() {
              _this3.offset = doClamp ? _this3.clamp(proxy.value, _this3.scroll.minOffset, _this3.scroll.maxOffset) : proxy.value;
              _this3.layoutByOffset(false);
            }
          }).call(function () {
            _this3.scrollTween = null;
          }).start();
        }

        /** Прокрутка на относительную Δ-высоту. */;
        _proto.scrollByHeight = function scrollByHeight(dHeight, opts) {
          if (opts === void 0) {
            opts = {};
          }
          this.scrollToHeight(this.offset + dHeight, opts);
        }

        /** Прокрутка к N уровням (N может быть дробным). */;
        _proto.scrollToLevels = function scrollToLevels(levels, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var step = Math.max(1e-6, this.levelStepConst());
          this.scrollToHeight(levels * step, opts);
        }

        /** Узнать абсолютный уровень узла из пула. null — если узел сейчас не привязан. */;
        _proto.getNodeLevel = function getNodeLevel(node) {
          var info = this.nodeLevelInfo.get(node);
          return info ? info.level : null;
        }

        /** Прокрутить так, чтобы уровень L оказался на якоре (центр окна). */;
        _proto.scrollToLevel = function scrollToLevel(level, opts) {
          if (opts === void 0) {
            opts = {};
          }
          this.scrollToLevels(level, opts);
        }

        /** Прокрутить к уровню узла. Возвращает false, если узел не в пуле/неактивен. */;
        _proto.scrollToNodeLevel = function scrollToNodeLevel(node, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var L = this.getNodeLevel(node);
          if (L == null) {
            console.warn('[TowerVirtualScroller] scrollToNodeLevel: node has no tracked level (not visible yet?)', node == null ? void 0 : node.name);
            return false;
          }
          this.scrollToLevel(L, opts);
          return true;
        }

        /** Остановить текущую анимацию скролла. */;
        _proto.stopScrollTween = function stopScrollTween() {
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
        }

        /** Простые easing-функции. */;
        _proto._getEase = function _getEase(name) {
          switch (name) {
            case 'linear':
              return function (t) {
                return t;
              };
            case 'quadIn':
              return function (t) {
                return t * t;
              };
            case 'quadOut':
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            case 'quadInOut':
              return function (t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
              };
            case 'cubicIn':
              return function (t) {
                return t * t * t;
              };
            case 'cubicOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 3);
              };
            case 'cubicInOut':
              return function (t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              };
            case 'quartIn':
              return function (t) {
                return t * t * t * t;
              };
            case 'quartOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 4);
              };
            case 'quartInOut':
              return function (t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
              };
            default:
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            // quadOut
          }
        }

        /** Найти ближайшего предка, который отслеживается в nodeLevelInfo (узел пула). */;
        _proto.findMappedAncestor = function findMappedAncestor(node) {
          var cur = node;
          while (cur) {
            if (this.nodeLevelInfo.has(cur)) return cur;
            cur = cur.parent;
          }
          return null;
        }

        /** Получить уровень для ЛЮБОЙ ноды (самой или её предка из пула). */;
        _proto.getLevelForAny = function getLevelForAny(node) {
          var owner = this.findMappedAncestor(node);
          if (!owner) return null;
          var info = this.nodeLevelInfo.get(owner);
          return info.level;
        }

        /** Прокрутить к уровню ЛЮБОЙ ноды (самой или её предка из пула). */;
        _proto.scrollToNodeOrAncestorLevel = function scrollToNodeOrAncestorLevel(node, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var owner = this.findMappedAncestor(node);
          if (!owner) return false;
          return this.scrollToNodeLevel(owner, opts);
        }

        /** Безопасный вариант с ожиданием до 3 кадров, если узел ещё не в пуле. */;
        _proto.scrollToNodeOrAncestorLevelSafe = /*#__PURE__*/
        function () {
          var _scrollToNodeOrAncestorLevelSafe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(node, opts) {
            var _this4 = this;
            var tryOnce, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (opts === void 0) {
                    opts = {};
                  }
                  tryOnce = function tryOnce() {
                    return _this4.scrollToNodeOrAncestorLevel(node, opts);
                  };
                  if (!tryOnce()) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return", true);
                case 4:
                  i = 0;
                case 5:
                  if (!(i < 3)) {
                    _context.next = 13;
                    break;
                  }
                  _context.next = 8;
                  return new Promise(function (res) {
                    return tween(_this4.node).delay(0).call(function () {
                      return res();
                    }).start();
                  });
                case 8:
                  if (!tryOnce()) {
                    _context.next = 10;
                    break;
                  }
                  return _context.abrupt("return", true);
                case 10:
                  i++;
                  _context.next = 5;
                  break;
                case 13:
                  console.warn('[TVS] scrollToNodeOrAncestorLevelSafe: не нашли уровень для', node == null ? void 0 : node.name);
                  return _context.abrupt("return", false);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function scrollToNodeOrAncestorLevelSafe(_x, _x2) {
            return _scrollToNodeOrAncestorLevelSafe.apply(this, arguments);
          }
          return scrollToNodeOrAncestorLevelSafe;
        }() // ===== клавиши W/S =====
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_W) this.keyHeldW = true;
          if (e.keyCode === KeyCode.KEY_S) this.keyHeldS = true;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_W) this.keyHeldW = false;
          if (e.keyCode === KeyCode.KEY_S) this.keyHeldS = false;
          // отпустили — инерция продолжает гаситься сама (update)
        };

        return TowerVirtualScroller;
      }(Component), (_descriptor33 = _applyDecoratedDescriptor(_class8.prototype, "scroll", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_Scroll();
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class8.prototype, "spawn", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_SpawnLayout();
        }
      })), _class8)) || _class7));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIScaleBounce.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "e225dgcyF9JYayYp4NmAGoB", "UIScaleBounce", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Показ/закрытие UI с баунс-скейлом и «айдлом»:
       * - playOpen(): 0 → overshoot → undershoot → final, затем бесконечный idle (вверх/вниз + лёгкий дыхающий скейл)
       * - playClose(): стоп idle, scale → 0, выключение
       */
      var UIScaleBounce = exports('UIScaleBounce', (_dec = ccclass('UIScaleBounce'), _dec2 = property({
        tooltip: 'Если пусто — анимируется этот же узел'
      }), _dec3 = property({
        tooltip: 'Итоговый масштаб после показа'
      }), _dec4 = property({
        tooltip: 'Оверсхут (выше финального) при показе'
      }), _dec5 = property({
        tooltip: 'Лёгкая просадка ниже финального'
      }), _dec6 = property({
        tooltip: 'Длительность 0 → оверсхут'
      }), _dec7 = property({
        tooltip: 'Длительность оверсхут → просадка'
      }), _dec8 = property({
        tooltip: 'Длительность просадка → финал'
      }), _dec9 = property({
        tooltip: 'Длительность закрытия (к 0)'
      }), _dec10 = property({
        tooltip: 'Амплитуда покачивания по Y (локально), в единицах'
      }), _dec11 = property({
        tooltip: 'Амплитуда дыхания скейла (± от finalScale)'
      }), _dec12 = property({
        tooltip: 'Полупериод одной фазы (вверх или вниз)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIScaleBounce, _Component);
        function UIScaleBounce() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "finalScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overshootScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "undershootScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upDuration", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "softenDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settleDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeDuration", _descriptor8, _assertThisInitialized(_this));
          // ---------- Параметры «айдла» ----------
          _initializerDefineProperty(_this, "idleMoveOffsetY", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleScaleDelta", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleHalfDuration", _descriptor11, _assertThisInitialized(_this));
          _this._busy = false;
          _this._idleTween = null;
          _this._basePos = null;
          return _this;
        }
        var _proto = UIScaleBounce.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.target) this.target = this.node;
          this.target.setScale(new Vec3(0, 0, 0));
        }

        /** Показ с баунсом (0 → overshoot → undershoot → final), затем запуск бесконечного idle. */;
        _proto.playOpen = /*#__PURE__*/
        function () {
          var _playOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var t;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.target || this._busy)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this._busy = true;
                  t = this.target; // На всякий случай перед новым показом всё остановим и сбросим
                  this._stopIdle();
                  t.active = true;
                  t.setScale(new Vec3(0, 0, 0));
                  _context.next = 9;
                  return new Promise(function (resolve) {
                    tween(t).to(_this2.upDuration, {
                      scale: new Vec3(_this2.overshootScale, _this2.overshootScale, _this2.overshootScale)
                    }, {
                      easing: 'quadOut'
                    }).to(_this2.softenDuration, {
                      scale: new Vec3(_this2.undershootScale, _this2.undershootScale, _this2.undershootScale)
                    }, {
                      easing: 'quadInOut'
                    }).to(_this2.settleDuration, {
                      scale: new Vec3(_this2.finalScale, _this2.finalScale, _this2.finalScale)
                    }, {
                      easing: 'quadOut'
                    }).call(function () {
                      return resolve();
                    }).start();
                  });
                case 9:
                  // Запоминаем базовую позицию для покачивания (локальная позиция на момент стабилизации)
                  this._basePos = t.getPosition().clone();

                  // Запускаем бесконечный idle
                  this._startIdle();
                  this._busy = false;
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playOpen() {
            return _playOpen.apply(this, arguments);
          }
          return playOpen;
        }() /** Закрытие: стоп idle, мягко уводим масштаб к 0, отключаем узел. */;
        _proto.playClose = /*#__PURE__*/
        function () {
          var _playClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var t;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.target || this._busy)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this._busy = true;
                  t = this.target; // Останавливаем покачивание и возвращаем в базу/финальный скейл
                  this._stopIdle(true);
                  _context2.next = 7;
                  return new Promise(function (resolve) {
                    tween(t).to(_this3.closeDuration, {
                      scale: new Vec3(0, 0, 0)
                    }, {
                      easing: 'quadIn'
                    }).call(function () {
                      return resolve();
                    }).start();
                  });
                case 7:
                  t.active = false;
                  this._busy = false;
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playClose() {
            return _playClose.apply(this, arguments);
          }
          return playClose;
        }() // ---------- Внутренние помогающие ----------
        /** Старт бесконечного «айдла»: вверх/вниз + дыхание скейла. */;

        _proto._startIdle = function _startIdle() {
          if (!this.target || !this._basePos) return;
          var t = this.target;
          var base = this._basePos;

          // Начальное состояние — точно в базе и с финальным скейлом
          t.setPosition(base);
          t.setScale(new Vec3(this.finalScale, this.finalScale, this.finalScale));
          var upPos = new Vec3(base.x, base.y + this.idleMoveOffsetY, base.z);
          var downPos = new Vec3(base.x, base.y - this.idleMoveOffsetY, base.z);
          var scaleUp = this.finalScale + this.idleScaleDelta;
          var scaleDown = this.finalScale - this.idleScaleDelta;

          // Бесконечный цикл: вверх → вниз → (следующая итерация снова вверх...)
          this._idleTween = tween(t).repeatForever(tween().to(this.idleHalfDuration, {
            position: upPos,
            scale: new Vec3(scaleUp, scaleUp, scaleUp)
          }, {
            easing: 'sineInOut'
          }).to(this.idleHalfDuration, {
            position: downPos,
            scale: new Vec3(scaleDown, scaleDown, scaleDown)
          }, {
            easing: 'sineInOut'
          })).start();
        }

        /**
         * Остановить айдл. Если reset = true — вернуть узел в базовую позицию и финальный скейл.
         */;
        _proto._stopIdle = function _stopIdle(reset) {
          if (reset === void 0) {
            reset = false;
          }
          if (this._idleTween) {
            this._idleTween.stop();
            this._idleTween = null;
          }
          if (reset && this.target) {
            if (this._basePos) this.target.setPosition(this._basePos);
            this.target.setScale(new Vec3(this.finalScale, this.finalScale, this.finalScale));
          }
        };
        return UIScaleBounce;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "finalScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "overshootScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.08;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "undershootScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.96;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "upDuration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.18;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "softenDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "settleDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "closeDuration", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.18;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "idleMoveOffsetY", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "idleScaleDelta", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.03;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "idleHalfDuration", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VerticalMoveAroundTarget.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, clamp, tween, input, Input, KeyCode, Component, InteractionState, MOUSE_ID;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      clamp = module.clamp;
      tween = module.tween;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30;
      cclegacy._RF.push({}, "3885628609LXpglYnTN3MJQ", "VerticalMoveAroundTarget", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VerticalMoveAroundTarget = exports('VerticalMoveAroundTarget', (_dec = ccclass('VerticalMoveAroundTarget'), _dec2 = property({
        group: {
          name: "General",
          id: "general"
        },
        type: Node,
        tooltip: "Таргет для ориентира по Y (обычно якорь камеры/риг)."
      }), _dec3 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Стартовая высота камеры относительно target.y."
      }), _dec4 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Минимальная высота над таргетом (если включён нижний лимит)."
      }), _dec5 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Максимальная высота над таргетом."
      }), _dec6 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Отключить нижний лимит. Можно опускаться ниже minHeight; offsetY может стать отрицательным."
      }), _dec7 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Ширина мягкой зоны у границ (ед.)."
      }), _dec8 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Отключить мягкую зону у нижней границы (чтобы низ не гасил скорость)."
      }), _dec9 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Жёсткость возврата за пределы."
      }), _dec10 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Демпфирование возврата (≈ 2*sqrt(K))."
      }), _dec11 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Инвертировать вертикальное управление (клавиши и драг)."
      }), _dec12 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Базовая макс. скорость (ед/с) до масштабирования."
      }), _dec13 = property({
        group: {
          name: "General",
          id: "general"
        },
        tooltip: "Плавность вертикали (сек). Меньше — резче."
      }), _dec14 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "Включить адаптацию скорости от глубины башни (рекомендуется)."
      }), _dec15 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "Мировой Y вершины башни (PieceSpawner.topY)."
      }), _dec16 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "baseScale из спавнера."
      }), _dec17 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "levelScaleFactor из спавнера (например, 0.9). r = 1/levelScaleFactor."
      }), _dec18 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "baseHeight из спавнера."
      }), _dec19 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "levelPadding из спавнера."
      }), _dec20 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "Степень нелинейности α при нормировке (1 = линейно; >1 — агрессивнее внизу)."
      }), _dec21 = property({
        group: {
          name: "Tower Coupling (optional)",
          id: "tower"
        },
        tooltip: "Нижний пол множителя (чтобы наверху не замирало)."
      }), _dec22 = property({
        group: {
          name: "Fallback pow/exp",
          id: "fallback"
        },
        tooltip: "Реф. высота для pow/exp режима (если useTowerAdaptiveScale = false)."
      }), _dec23 = property({
        group: {
          name: "Fallback pow/exp",
          id: "fallback"
        },
        tooltip: "Степенная часть (больше — быстрее внизу)."
      }), _dec24 = property({
        group: {
          name: "Fallback pow/exp",
          id: "fallback"
        },
        tooltip: "Экспоненциальный буст (0…0.5). 0 — выкл."
      }), _dec25 = property({
        group: {
          name: "Pointer",
          id: "pointer"
        },
        tooltip: "Базовая чувствительность драга: ед/пиксель (до масштабирования)."
      }), _dec26 = property({
        group: {
          name: "Pointer",
          id: "pointer"
        },
        tooltip: "Порог пикселей для начала драга."
      }), _dec27 = property({
        group: {
          name: "Pointer",
          id: "pointer"
        },
        tooltip: "Мёртвая зона старта (ед.)."
      }), _dec28 = property({
        group: {
          name: "Keyboard",
          id: "keyboard"
        },
        tooltip: "Ускорение клавиш (ед/с²)."
      }), _dec29 = property({
        group: {
          name: "Keyboard",
          id: "keyboard"
        },
        tooltip: "Торможение клавиш (ед/с²)."
      }), _dec30 = property({
        group: {
          name: "Debug",
          id: "debug"
        },
        tooltip: "Логи."
      }), _dec31 = property({
        group: {
          name: "Debug",
          id: "debug"
        },
        tooltip: "Тег префикса логов."
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalMoveAroundTarget, _Component);
        function VerticalMoveAroundTarget() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // === General ===
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minHeight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxHeight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noMinLimit", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "softRange", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disableSoftAtMin", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "springK", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "springDamping", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertVertical", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSpeed", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSmoothTime", _descriptor12, _assertThisInitialized(_this));
          // === Tower Coupling (optional) ===
          _initializerDefineProperty(_this, "useTowerAdaptiveScale", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerTopY", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerBaseScale", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerLevelScaleFactor", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerBaseHeight", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerLevelPadding", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "towerAlpha", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minScale", _descriptor20, _assertThisInitialized(_this));
          // === Fallback: pow/exp масштаб (если отключить Tower Coupling) ===
          _initializerDefineProperty(_this, "refHeight", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "powExp", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "expK", _descriptor23, _assertThisInitialized(_this));
          // === Pointer ===
          _initializerDefineProperty(_this, "unitsPerPixelY", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragThreshold", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startMoveOffsetY", _descriptor26, _assertThisInitialized(_this));
          // === Keyboard ===
          _initializerDefineProperty(_this, "keyboardAccel", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "keyboardDecel", _descriptor28, _assertThisInitialized(_this));
          // === Debug ===
          _initializerDefineProperty(_this, "debugLogs", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "debugTag", _descriptor30, _assertThisInitialized(_this));
          // === внутреннее состояние ===
          _this.dirY = 0;
          _this.kbAccumY = 0;
          _this.kbActive = false;
          _this.kbVel = 0;
          _this.touchActiveId = null;
          _this.touchStartY = null;
          _this.touchLastY = null;
          _this.touchDragging = false;
          _this.touchAccumUnits = 0;
          _this.touchActive = false;
          _this.touchClaimed = false;
          _this.mouseHeld = false;
          _this.mouseStartY = null;
          _this.mouseLastY = null;
          _this.mouseDragging = false;
          _this.mouseAccumUnits = 0;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          _this.velY = 0;
          // ед/сек
          _this.baseYOffset = 0;
          // высота над target.y (может быть <0)
          _this.pendingUnitsFromPointer = 0;
          // ΔY от указателей за кадр (ед.)
          // — предвычисления для Tower —
          _this.tower_r = 1;
          _this.tower_h0 = 1;
          // baseHeight*baseScale
          _this.tower_pad = 0;
          _this.tower_k = 0;
          // r - 1
          _this.tower_Sref = 1;
          // глубина на старте
          _this.tower_Tref = 1;
          return _this;
        }
        var _proto = VerticalMoveAroundTarget.prototype;
        _proto.dbg = function dbg() {
          var _console;
          for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            a[_key2] = arguments[_key2];
          }
          if (this.debugLogs) (_console = console).log.apply(_console, ["[" + this.debugTag + "]"].concat(a));
        }

        // ===== API =====
        ;

        _proto.stopInertia = function stopInertia() {
          this.velY = 0;
          this.pendingUnitsFromPointer = 0;
          this.dirY = 0;
          this.kbAccumY = 0;
          this.kbActive = false;
          this.kbVel = 0;
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        /** Плавно перейти к мировому Y (с учётом target.y). */;
        _proto.moveToWorldY = function moveToWorldY(worldY, duration, extraOffset) {
          var _this2 = this;
          if (extraOffset === void 0) {
            extraOffset = 0;
          }
          return new Promise(function (resolve) {
            if (!_this2.target) {
              resolve();
              return;
            }
            var yLocal = worldY - _this2.target.worldPosition.y + extraOffset;
            var minEdge = _this2.noMinLimit ? -Infinity : _this2.minHeight;
            var targetY = clamp(yLocal, minEdge, _this2.maxHeight);
            if (Math.abs(_this2.baseYOffset - targetY) < 0.01 || duration <= 0) {
              _this2.baseYOffset = targetY;
              resolve();
              return;
            }
            _this2.stopInertia();
            var start = {
              y: _this2.baseYOffset
            };
            tween(start).to(duration, {
              y: targetY
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                _this2.baseYOffset = start.y;
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        };
        _proto.moveToNode = function moveToNode(node, duration, extraOffset) {
          if (extraOffset === void 0) {
            extraOffset = 0;
          }
          return this.moveToWorldY(node.worldPosition.y, duration, extraOffset);
        };
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.start = function start() {
          var minEdge = this.noMinLimit ? -Infinity : this.minHeight;
          this.baseYOffset = clamp(this.startHeight, minEdge, this.maxHeight);

          // предвычисляем константы башни (устойчиво)
          this.tower_r = this.towerLevelScaleFactor > 0 ? 1 / this.towerLevelScaleFactor : 1;
          this.tower_h0 = Math.max(1e-9, this.towerBaseHeight * this.towerBaseScale);
          this.tower_pad = Math.max(0, this.towerLevelPadding);
          this.tower_k = Math.max(0, this.tower_r - 1);

          // глубина на старте + нормирующая толщина Tref
          var yWorld = this.currentWorldY();
          this.tower_Sref = Math.max(0, this.towerTopY - yWorld);
          this.tower_Tref = Math.max(1e-9, this.tower_h0 + this.tower_k * this.tower_Sref + this.tower_pad);
          this.dbg('tower init', {
            r: this.tower_r,
            h0: this.tower_h0,
            pad: this.tower_pad,
            k: this.tower_k,
            Sref: this.tower_Sref,
            Tref: this.tower_Tref
          });
        }

        // === ВСПОМОГАТЕЛЬНЫЕ ===
        /** Текущий мировой Y камеры по target и offset. */;
        _proto.currentWorldY = function currentWorldY() {
          if (this.target) return this.target.worldPosition.y + this.baseYOffset;
          return this.baseYOffset; // fallback, если target не задан
        }

        /** Адаптивный масштаб от глубины башни (устойчивый на больших числах). */;
        _proto.getSpeedScaleTower = function getSpeedScaleTower() {
          // глубина от вершины в мировых единицах
          var S = Math.max(0, this.towerTopY - this.currentWorldY());

          // линейная аппроксимация толщины уровня: T(S) ≈ h0 + (r-1)*S + pad
          var T = this.tower_h0 + this.tower_k * S + this.tower_pad;

          // нормировка относительно старта + нелинейность α
          var scale = T / this.tower_Tref;
          if (this.towerAlpha !== 1) {
            // возводим в степень, аккуратно
            scale = Math.pow(Math.max(1e-9, scale), this.towerAlpha);
          }

          // пол снизу, потолка нет
          scale = Math.max(this.minScale, scale);

          // страховки от численных артефактов
          if (!Number.isFinite(scale) || scale <= 0) scale = this.minScale;

          // лог (при желании)
          // this.dbg('scale tower', { S: Math.round(S), T: T.toFixed(3), scale: scale.toFixed(3) });

          return scale;
        }

        /** Fallback: pow/exp от |offset| (если отключили Tower-режим). */;
        _proto.getSpeedScaleFallback = function getSpeedScaleFallback() {
          var ref = Number.isFinite(this.refHeight) && this.refHeight > 0 ? this.refHeight : 500;
          var hAbs = Math.max(1e-6, Math.abs(this.baseYOffset));
          var r = hAbs / ref;
          var sPow = Math.pow(r, Math.max(0, this.powExp));
          var sExp = this.expK !== 0 ? Math.exp(this.expK * (r - 1)) : 1;
          var scale = sPow * sExp;
          if (!Number.isFinite(scale) || scale <= 0) scale = 1;
          return Math.max(this.minScale, scale);
        };
        _proto.getSpeedScale = function getSpeedScale() {
          return this.useTowerAdaptiveScale ? this.getSpeedScaleTower() : this.getSpeedScaleFallback();
        }

        // === клавиатура ===
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_S) this.dirY = 1;else if (e.keyCode === KeyCode.KEY_W) this.dirY = -1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_S && this.dirY === 1) this.dirY = 0;
          if (e.keyCode === KeyCode.KEY_W && this.dirY === -1) this.dirY = 0;
          if (this.dirY === 0) {
            this.kbAccumY = 0;
            this.kbActive = false;
          }
        }

        // === тач ===
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.touchActiveId !== null) return;
          this.touchActiveId = e.getID();
          var y = e.getLocationY();
          this.touchStartY = y;
          this.touchLastY = y;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.touchActiveId !== id || this.touchLastY === null || this.touchStartY === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var y = e.getLocationY();
          var dyIncPx = y - this.touchLastY;
          var totalPx = y - this.touchStartY;
          this.touchLastY = y;
          if (!this.touchDragging && Math.abs(totalPx) >= this.dragThreshold) this.touchDragging = true;
          if (dyIncPx === 0) return;
          var sign = this.invertVertical ? -1 : 1;
          var dyIncUnits = dyIncPx * this.unitsPerPixelY * this.getSpeedScale() * sign;
          if (!this.touchActive) {
            this.touchAccumUnits += dyIncUnits;
            if (this.touchDragging && Math.abs(this.touchAccumUnits) >= this.startMoveOffsetY) {
              if (!InteractionState.inGesture) {
                this.touchActive = true;
                InteractionState.beginGesture(id, 'touch');
                this.touchClaimed = true;
                InteractionState.markDrag(id);
              } else return;
            } else return;
          }
          if (this.touchClaimed) this.pendingUnitsFromPointer += dyIncUnits;
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.touchActiveId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.touchActiveId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.touchActiveId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.touchActiveId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        // === мышь ===
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = true;
          var y = e.getLocationY();
          this.mouseStartY = y;
          this.mouseLastY = y;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastY === null || this.mouseStartY === null) return;
          var y = e.getLocationY();
          var dyIncPx = y - this.mouseLastY;
          var totalPx = y - this.mouseStartY;
          this.mouseLastY = y;
          if (!this.mouseDragging && Math.abs(totalPx) >= this.dragThreshold) this.mouseDragging = true;
          if (dyIncPx === 0) return;
          var sign = this.invertVertical ? -1 : 1;
          var dyIncUnits = dyIncPx * this.unitsPerPixelY * this.getSpeedScale() * sign;
          if (!this.mouseActive) {
            this.mouseAccumUnits += dyIncUnits;
            if (this.mouseDragging && Math.abs(this.mouseAccumUnits) >= this.startMoveOffsetY) {
              this.mouseActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(MOUSE_ID, 'mouse');
                this.mouseClaimed = true;
              }
              InteractionState.markDrag(MOUSE_ID);
            } else return;
          }
          this.pendingUnitsFromPointer += dyIncUnits;
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartY = this.mouseLastY = null;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        }

        // === апдейт (инерция + мягкие границы) ===
        ;

        _proto.update = function update(dt) {
          var sign = this.invertVertical ? -1 : 1;

          // Порог «старта» для клавиш — учитываем текущий scale
          if (this.dirY !== 0) {
            if (!this.kbActive) {
              this.kbAccumY += Math.abs(this.maxSpeed * this.getSpeedScale() * dt);
              if (this.kbAccumY >= this.startMoveOffsetY) this.kbActive = true;
            }
          } else {
            this.kbAccumY = 0;
            this.kbActive = false;
          }
          var speedScale = this.getSpeedScale();

          // Целевая скорость от клавиш
          var desiredKbVel = this.dirY !== 0 && this.kbActive ? this.dirY * this.maxSpeed * speedScale * sign : 0;

          // Плавный разгон/торможение W/S
          var need = desiredKbVel - this.kbVel;
          var accel = Math.sign(need) === Math.sign(desiredKbVel) ? this.keyboardAccel : this.keyboardDecel;
          var maxStep = accel * dt;
          if (need > maxStep) this.kbVel += maxStep;else if (need < -maxStep) this.kbVel -= maxStep;else this.kbVel = desiredKbVel;
          var keyboardTargetVel = this.kbVel;

          // Скорость от указателей — уже масштабирована в on*Move()
          var pointerTargetVel = this.pendingUnitsFromPointer / Math.max(dt, 1e-5);
          this.pendingUnitsFromPointer = 0;

          // Мягкие края (нижний можно отключить)
          if (this.softRange > 0) {
            var dToMin = this.baseYOffset - this.minHeight;
            var dToMax = this.maxHeight - this.baseYOffset;
            var softFactor = function softFactor(d, edge) {
              if (edge <= 0) return 1;
              if (d >= edge) return 1;
              var t = clamp(d / edge, 0, 1);
              return t * t * (3 - 2 * t);
            };
            var softMin = this.noMinLimit || this.disableSoftAtMin ? 0 : this.softRange;
            var softMax = this.softRange;
            if (keyboardTargetVel < 0) keyboardTargetVel *= softFactor(dToMin, softMin);
            if (pointerTargetVel < 0) pointerTargetVel *= softFactor(dToMin, softMin);
            if (keyboardTargetVel > 0) keyboardTargetVel *= softFactor(dToMax, softMax);
            if (pointerTargetVel > 0) pointerTargetVel *= softFactor(dToMax, softMax);
          }
          var targetVel = keyboardTargetVel + pointerTargetVel;

          // Сглаживание к целевой скорости
          var k = this.moveSmoothTime > 0 ? 1 - Math.exp(-dt / this.moveSmoothTime) : 1;
          this.velY += (targetVel - this.velY) * k;
          this.baseYOffset += this.velY * dt;

          // Границы
          if (!this.noMinLimit) {
            if (this.baseYOffset < this.minHeight) {
              var error = this.minHeight - this.baseYOffset;
              this.velY += (this.springK * error - this.springDamping * this.velY) * dt;
              this.baseYOffset += this.velY * dt;
              if (this.baseYOffset < this.minHeight) this.baseYOffset = this.minHeight;
            }
          }
          if (this.baseYOffset > this.maxHeight) {
            var _error = this.maxHeight - this.baseYOffset;
            this.velY += (this.springK * _error - this.springDamping * this.velY) * dt;
            this.baseYOffset += this.velY * dt;
            if (this.baseYOffset > this.maxHeight) this.baseYOffset = this.maxHeight;
          }

          // Чистка численных артефактов
          if (!Number.isFinite(this.velY)) this.velY = 0;
          if (!Number.isFinite(this.baseYOffset)) this.baseYOffset = 0;

          // Сброс флага вращения
          var localActive = this.mouseActive || this.touchActive || this.dirY !== 0 && this.kbActive;
          if (!InteractionState.inGesture && !localActive && InteractionState.isRotating) {
            InteractionState.isRotating = false;
          }
          if (!localActive && Math.abs(this.velY) < 0.02) this.velY = 0;

          // debug
          if (this.debugLogs && Math.random() < 0.1) {
            var yW = this.currentWorldY();
            var S = Math.max(0, this.towerTopY - yW);
            var T = this.tower_h0 + this.tower_k * S + this.tower_pad;
            this.dbg('upd', {
              worldY: yW.toFixed(2),
              S: Math.round(S),
              scale: speedScale.toFixed(3),
              T: T.toFixed(3),
              Tref: this.tower_Tref.toFixed(3),
              kbVel: this.kbVel.toFixed(3),
              velY: this.velY.toFixed(3)
            });
          }
        };
        _createClass(VerticalMoveAroundTarget, [{
          key: "offsetY",
          get:
          // T(Sref) = h0 + k*Sref + pad  (нормирующая толщина)

          function get() {
            return this.baseYOffset;
          }
        }]);
        return VerticalMoveAroundTarget;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxHeight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "noMinLimit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "softRange", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "disableSoftAtMin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "springK", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "springDamping", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "invertVertical", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "moveSmoothTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.12;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "useTowerAdaptiveScale", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "towerTopY", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "towerBaseScale", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "towerLevelScaleFactor", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "towerBaseHeight", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "towerLevelPadding", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "towerAlpha", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "refHeight", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "powExp", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.6;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "expK", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerPixelY", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "startMoveOffsetY", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "keyboardAccel", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "keyboardDecel", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 55;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "debugLogs", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "debugTag", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "VMove";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});