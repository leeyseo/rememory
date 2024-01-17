module.exports = function (app) {
    const pcapsule = require("./pcapsuleController");
    const jwtMiddleware = require("../../../config/jwtMiddleware");
    const checkUserIdx = require("./treeMiddleware");
  
    // 전체 장식품 조회 API
    app.get("/api/trees/:userIdx", checkUserIdx, tree.getDecorations);
  
    // 장식품 생성 API
    app.post(
      "/pcapsule/create",
      jwtMiddleware,
      checkUserIdx,
      pcapsule.postDecoration
    );
  
    // 장식품 상세 조회 API
    app.get(
      "/pcapsule/retrieve",
      jwtMiddleware,
      checkUserIdx,
      pcapsule.getDecoration
    );
  
    // 장식품 삭제 API
    app.delete(
      "/api/trees/decoration/:decorationIdx",
      jwtMiddleware,
      pcapsule.deleteDecoration
    );
  };
  