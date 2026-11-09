from fastapi import APIRouter

from config.wedding_config import WEDDING_CONFIG
from models.wedding import WeddingConfig

router = APIRouter()


@router.get("/health")
async def health() -> dict:
    return {"status": "ok"}


@router.get("/config", response_model=WeddingConfig)
async def get_wedding_config() -> dict:
    return WEDDING_CONFIG
