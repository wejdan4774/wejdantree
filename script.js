<html lang="ar">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title>جرد الأشجار في الرياض</title>
  <link rel="stylesheet" href="https://js.arcgis.com/4.31/esri/themes/light/main.css" />
  <script src="https://js.arcgis.com/4.31/"></script>

  <!-- تعبيرات Arcade هنا (كما تم شرحها سابقًا) -->

  <style>
    html,
    body,
    #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      background-color: #f5f5f5; /* خلفية الصفحة */
    }

    #viewDiv {
      border: 2px solid #dcdcdc;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    }

    .esri-widget {
      background-color: #ffffff;
      border-radius: 5px;
      padding: 10px;
    }

    .esri-button {
      background-color: #0078d4;
      color: white;
      border-radius: 3px;
      padding: 8px 15px;
    }

    .esri-button:hover {
      background-color: #005a9e;
    }

    .esri-form-element input[type="text"] {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 4px;
      width: 100%;
    }

    .esri-form-element input[readonly] {
      background-color: #f0f0f0;
      color: #888;
    }

    .esri-form-group > .esri-form-element-label {
      font-weight: bold;
      color: #0078d4;
    }
  </style>

  <script>
    require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Editor",
      "esri/form/ExpressionInfo",
      "esri/form/FormTemplate",
      "esri/form/elements/GroupElement",
      "esri/form/elements/FieldElement"
    ], (
      WebMap, MapView, FeatureLayer, Editor, ExpressionInfo, FormTemplate, GroupElement, FieldElement
    ) => {
      // تضمين تعبيرات Arcade هنا (كما تم شرحها)

      const webmap = new WebMap({
        portalItem: { id: "1e2a951b191c4c4998700ddcf8b46f02" }
      });

      const view = new MapView({
        container: "viewDiv",
        map: webmap,
        center: [46.6753, 24.7136],  // إحداثيات الرياض
        zoom: 12
      });

      // إضافة طبقة الأشجار
      const treesLayer = new FeatureLayer({
        url: "رابط_الطبقة_الخاصة_بالأشجار",
        title: "أشجار الرياض"
      });
      view.map.add(treesLayer);

      const editor = new Editor({
        view: view,
        supportingWidgetDefaults: {
          featureForm: {
            groupDisplay: "sequential"
          }
        }
      });

      view.ui.add(editor, "top-right");
    });
  </script>
</head>

<body>
  <div id="viewDiv"></div>
</body>
</html>
